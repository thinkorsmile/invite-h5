import { Activity, Reservation } from '../types'

const ACTIVITY_KEY = 'INVITE_ACTIVITIES'
const RESERVE_KEY = 'INVITE_RESERVATIONS'

export const DB = {
  getActivities(): Activity[] {
    return JSON.parse(localStorage.getItem(ACTIVITY_KEY) || '[]')
  },

  saveActivity(activity: Activity) {
    const list = DB.getActivities()
    list.push(activity)
    localStorage.setItem(ACTIVITY_KEY, JSON.stringify(list))
  },

  getActivity(id: string): Activity | undefined {
    return DB.getActivities().find(a => a.id === id)
  },

  saveReservation(res: Reservation) {
    const list: Reservation[] = JSON.parse(
      localStorage.getItem(RESERVE_KEY) || '[]'
    )
    list.push(res)
    localStorage.setItem(RESERVE_KEY, JSON.stringify(list))
  }
}