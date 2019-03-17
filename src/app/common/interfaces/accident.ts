export interface Accident {
  id: number
  image: string
  camera: {
    id: number
    lat: number
    lon: number
  }
  closed: boolean
  createdAt: Date
  vehicles: string[]
}
