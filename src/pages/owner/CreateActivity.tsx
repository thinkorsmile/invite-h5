import { Button, Form, Input, TextArea } from 'antd-mobile'
import { v4 as uuid } from 'uuid'
import { DB } from '../../store/db'

export default function CreateActivity() {
  const onFinish = (values: any) => {
    DB.saveActivity({
      id: uuid(),
      title: values.title,
      desc: values.desc,
      executors: values.executors?.split(',') || [],
      createdAt: Date.now()
    })
    alert('活动已创建，可分享链接')
  }

  return (
    <div style={{ padding: 16 }}>
      <h2>创建活动（Owner）</h2>

      <Form onFinish={onFinish}>
        <Form.Item name="title" label="活动名称" required>
          <Input />
        </Form.Item>

        <Form.Item name="desc" label="活动说明">
          <TextArea rows={3} />
        </Form.Item>

        <Form.Item name="executors" label="执行者ID（逗号分隔）">
          <Input placeholder="zhangsan,lisi" />
        </Form.Item>

        <Button block type="submit" color="primary">
          创建活动
        </Button>
      </Form>
    </div>
  )
}