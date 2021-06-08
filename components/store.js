import {observable,action} from 'mobx'

let index = 0

class ObservableListStore {
  @observable list = []

  @action  addListItems (items) {
    this.list=[...this.list,...items]
  }

  @action  removeListItem (item) {
    this.list = this.list.filter((l) => {
      return l.id_artist !== item.id_artist
    })
  }


}


const observableListStore = new ObservableListStore()
export default observableListStore