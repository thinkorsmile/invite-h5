import { Form, Input, Button } from 'antd-mobile'
import { useParams, useSearchParams } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import { DB } from '../../store/db'

export default function ReserveForm() {
  const { id } = useParams()
  const [sp] = useSearchParams()
  const executorId = sp.get('executor') || undefined

  const onFinish = (values: any) => {
    if (!id) return
    DB.saveReservation({
      id: uuid(),
      activityId: id,
      executorId,
      name: values.name,
      phone: values.phone,
      createdAt: Date.now()
    })
    alert('预约成功')
  }

  return (
    <div style={{ padding: 16 }}>
      <h2>填写预约信息</h2>

      <Form onFinish={onFinish}>
        <Form.Item name="name" label="姓名" required>
          <Input />
        </Form.Item>

        <Form.Item name="phone" label="手机号" required>
          <Input />
        </Form.Item>

        <Button block type="submit" color="primary">
          提交预约
        </Button>
      </Form>
    </div>
  )
}