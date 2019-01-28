using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Data.Entity.Validation;
using System.Linq;
using System.Threading.Tasks;

namespace insuranceApp.Infraestructure.DataAccess.Repositories
{
    public class RepositoryService<TEntity> : IRepositoryService<TEntity> where TEntity : class
    {
        private readonly DbContext _dbContext;
        private readonly IDbSet<TEntity> _entities;
        private string _errorMessage = string.Empty;

        public RepositoryService(DbContext dbContext)
        {
            _dbContext = dbContext;
            _entities = _dbContext.Set<TEntity>();
        }

        public void Add(TEntity entity)
        {
            try
            {
                if (entity == null)
                {
                    throw new ArgumentNullException(nameof(entity));
                }
                _entities.Add(entity);
                _dbContext.SaveChanges();
            }
            catch (DbEntityValidationException dbEx)
            {

                foreach (var validationErrors in dbEx.EntityValidationErrors)
                {
                    foreach (var validationError in validationErrors.ValidationErrors)
                    {
                        _errorMessage +=
                            $"Property: {validationError.PropertyName} Error: {validationError.ErrorMessage}" + Environment.NewLine;
                    }
                }
                throw new Exception(_errorMessage, dbEx);
            }
        }

        public void Update(TEntity entity)
        {
            try
            {
                if (entity == null)
                {
                    throw new ArgumentNullException(nameof(entity));
                }
                _entities.AddOrUpdate(entity);
                _dbContext.SaveChanges();
            }
            catch (DbEntityValidationException dbEx)
            {

                foreach (var validationErrors in dbEx.EntityValidationErrors)
                {
                    foreach (var validationError in validationErrors.ValidationErrors)
                    {
                        _errorMessage +=
                            $"Property: {validationError.PropertyName} Error: {validationError.ErrorMessage}" + Environment.NewLine;
                    }
                }
                throw new Exception(_errorMessage, dbEx);
            }
        }

        public TEntity Get(int id)
        {
            return _entities.Find(id);
        }

        public List<TEntity> GetAll(bool includeChildren = false)
        {
            return includeChildren ? IncludeAll(_entities.AsQueryable()).ToList() : _entities.ToList();
        }

        public List<TEntity> GetAllByCondition(Func<TEntity, bool> condition)
        {
            return IncludeAll(_entities.AsQueryable()).Where(condition).ToList();
        }

        public Task<List<TEntity>> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public Task<TEntity> GetAsync(int id)
        {
            throw new NotImplementedException();
        }
        
        public void Remove(int id)
        {
            try
            {
                var entityToRemove = _entities.Find(id);
                _entities.Remove(entityToRemove);
                _dbContext.SaveChanges();
            }
            catch (DbEntityValidationException dbEx)
            {

                foreach (var validationErrors in dbEx.EntityValidationErrors)
                {
                    foreach (var validationError in validationErrors.ValidationErrors)
                    {
                        _errorMessage +=
                            $"Property: {validationError.PropertyName} Error: {validationError.ErrorMessage}" + Environment.NewLine;
                    }
                }
                throw new Exception(_errorMessage, dbEx);
            }
        }

        private IQueryable<TEntity> IncludeAll(IQueryable<TEntity> queryable)
        {
            var type = typeof(TEntity);
            var properties = type.GetProperties();
            return (from property in properties
                let isVirtual = property.GetGetMethod().IsVirtual
                where isVirtual && properties.FirstOrDefault(c => c.Name == property.Name + "Id") != null
                select property).Aggregate(queryable, (current, property) => current.Include(property.Name));
        }
    }
}
