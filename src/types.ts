export interface Activity {
  id: string
  title: string
  desc: string
  executors: string[]
  createdAt: number
}

export interface Reservation {
  id: string
  activityId: string
  executorId?: string
  name: string
  phone: string
  createdAt: number
}