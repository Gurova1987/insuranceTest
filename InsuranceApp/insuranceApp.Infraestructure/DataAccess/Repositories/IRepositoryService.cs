using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace insuranceApp.Infraestructure.DataAccess.Repositories
{
    public interface IRepositoryService<TEntity>
    {
        TEntity Get(int id);
        List<TEntity> GetAll(bool includeChildren = false);
        List<TEntity> GetAllByCondition(Func<TEntity, bool> condition);
        Task<TEntity> GetAsync(int id);
        Task<List<TEntity>> GetAllAsync();
        void Add(TEntity entity);
        void Update(TEntity entity);
        void Remove(int id);
    }
}
