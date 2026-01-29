import { useParams, useSearchParams } from 'react-router-dom'
import { DB } from '../../store/db'
import { Button } from 'antd-mobile'

export default function ActivityDetail() {
  const { id } = useParams()
  const [sp] = useSearchParams()
  const executor = sp.get('executor')

  const act = id ? DB.getActivity(id) : null
  if (!act) return <div>活动不存在</div>

  return (
    <div style={{ padding: 16 }}>
      <h2>{act.title}</h2>
      <p>{act.desc}</p>

      <Button
        block
        color="primary"
        onClick={() =>
          (location.href = `#/reserve/${act.id}?executor=${executor || ''}`)
        }
      >
        立即预约
      </Button>
    </div>
  )
}