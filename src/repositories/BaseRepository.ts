import { CreateOptions } from "sequelize";

  class BaseRepository<T = any> {
    domain: any

    constructor(domain: any) {
      this.domain  = domain
    }

    /**
     * Create
     * @param entity domain
     * @param options create options
     * @returns create entity
     */
    async create(entity: object, options?: CreateOptions) {
      return await this.domain.create(entity, options);
    }

    /**
     * Update
     * 
     * @param id id 
     * @param entity params
     * @param options options
     * @returns update
     */
    async update(id: number | string, entity: T, options: object) {
      return this.domain.update(entity, {where: {id, ...options }})
    }

    /**
     * Delete
     * @param options delete options
     * @returns delete
     */
    async delete(options: object) {
      return await this.domain.destroy(options)
    }

    /**
     * Find by ID
     * @param id id of the data
     * @returns one record of the data
     */
    findByid(id: number) {
      return this.domain.findOne({where: {id: id}});
    }

    /**
     * _findByField
     * @param field filed that will set for search
     * @param value value of the field 
     * @returns record of the data
     */
    async _findByField(field: string, value: any, options?: object) {
      let where = {
        where: {
          [field] : value
        }
      }
      
      return this.domain.findOne({...where, ...options})
    }

  }

  export default BaseRepository