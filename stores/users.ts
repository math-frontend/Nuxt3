import { defineStore } from 'pinia'

export const usersStore = defineStore('users', {
  state: () => ({
    list: [],
    view: false
  }),
  getters: {
    users():unknown[] {
      return this.list
    },
    viewUser():{} {
      return this.view
    },
    quantity():number {
      return this.list.length
    }
  },
  actions: {
    async getUsers(this:any) {
      try {
        const doc = await getMultipleDocs('users')
        this.list = doc.data
      } catch (error:any){
        notificationError(error)
      }
    },
  },
})
