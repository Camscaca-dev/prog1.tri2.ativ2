class Item {
  constructor(public title: string) {}
}

class TodoList {
  private items: Promise<Item[]>
  private filePath: string

  constructor(filePath: string) {
    this.filePath = filePath
    this.items = this.loadListFromDisk()
  }

  private async saveListToDisk() {
    const file = Bun.file(this.filePath)
    const data = JSON.stringify(await this.items)
    await file.write(data)
  }

  private async loadListFromDisk() {
    try {
      const file = Bun.file(this.filePath)
      const data = await file.json() as Item[]
      return data.map(item => new Item(item.title))
    } catch {
      return []
    }
  }

  async addItem(item: Item) {
    const items = await this.items

    if (!item)
      throw "Item inválido"

    if (!item.title.trim())
      throw "Item deve conter um título"

    items.push(item)

    await this.saveListToDisk()

    return items.length - 1
  }

  async removeItem(index: number) {
    const items = await this.items

    if (!items[index])
      throw `Item ${index} não existe`

    items.splice(index, 1)

    await this.saveListToDisk()
  }

  async updateItem(index: number, title: string) {
    const items = await this.items

    if (!items[index])
      throw `Item ${index} não existe`

    if (!title.trim())
      throw "Título inválido"

    items[index].title = title

    await this.saveListToDisk()
  }

  async getItems() {
    return Array.from(await this.items)
  }

  async getItem(index: number) {
    const items = await this.items

    if (!items[index])
      throw `Item ${index} não existe`

    return items[index]
  }
}

export default TodoList
export { TodoList, Item }