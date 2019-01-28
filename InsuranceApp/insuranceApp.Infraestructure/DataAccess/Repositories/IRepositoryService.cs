using System.Collections.Generic;
using System.Threading.Tasks;

namespace insuranceApp.Infraestructure.DataAccess.Repositories
{
    public interface IRepositoryService<TEntity>
    {
        TEntity Get(int id);
        List<TEntity> GetAll();
        Task<TEntity> GetAsync(int id);
        Task<List<TEntity>> GetAllAsync();
        void Add(TEntity entity);
        void Update(TEntity entity);
        void Remove(int id);
    }
}
