import { defineStore } from 'pinia'

export const exampleStore = defineStore('exampleStore', {
  state: () => ({
    listData: [],
    viewData: {},
    loadings: {
      list: false,
      view: false,
      edit: false,
      remove: false
    }
  }),
  getters: {
    list():unknown[] {
      return this.listData
    },
    view():{} {
      return this.viewData
    },
    quantity():number {
      return this.list.length
    },
    loading():any {
      return this.loadings
    }
  },
  actions: {
    async init (this:any) {
      await this.getList()
    },

    async getList(this:any) {
      try {
        this.loadings.list = true
        const doc = await getMultipleDocs('users')
        this.listData = doc.data
      } catch (error:any){
        notificationError(error)
      } finally {
        this.loadings.list = false
      }
    },

    async getItem(this:any, uid:string) {
      try {
        this.loadings.view = true
        const doc = await getOneDoc('users', uid)
        this.viewData = doc.data
      } catch (error:any){
        notificationError(error)
      } finally {
        this.loadings.view = false
      }
    },

    async saveItem(this:any, uid:string, data:any) {
      try {
        updateOneDoc('users', uid, data)
        notificationSuccess('Item salvo com sucesso')
      } catch (error:any){
        notificationError(error)
      } finally {
        this.loadings.edit = false
      }
    },

    async addItem(this:any, data:any) {
      try {
        addOneDoc('users', data)
        notificationSuccess('Item adicionado com sucesso')
      } catch (error:any){
        notificationError(error)
      } finally {
        this.loadings.edit = false
      }
    },

    async removeItem(this:any, uid:string) {
      try {
        removeOneDoc('users', uid)
        notificationSuccess('Item removido com sucesso')
      } catch (error:any){
        notificationError(error)
      } finally {
        this.loadings.edit = false
      }
    }
  },
})
