import { useState } from 'react'
import { Input, Button, Form, Alert } from 'antd'
import { LockOutlined, MailOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { currentUserRepository } from '../modules/current-user/current-user.repository'
import { Link } from 'react-router-dom'

interface FormData {
  email: string
  password: string
}

function Signin() {
  const [form] = Form.useForm()
  const [serverError, setServerError] = useState<string | null>(null)

  const submit = async (data: FormData) => {
    try {
      const result = await currentUserRepository.signin(data)
      console.log(result)
    } catch (error: any) {
      setServerError(error.response.data.ErrorMessageJP)
    }
  }

  return (
    <Container>
      <Content>
        <Title>ログイン</Title>
        <Form
          name="signin"
          form={form}
          onFinish={values => submit(values as FormData)}
          size="large"
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: '入力してください' },
              {
                type: 'email',
                validateTrigger: 'onSubmit',
                message: '無効なフォーマットです',
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="メールアドレス"
              style={{ margin: 'auto' }}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '入力してください' }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="パスワード"
            />
          </Form.Item>
          {serverError && (
            <Alert
              message="ログインに失敗しました"
              description={serverError}
              type="error"
            />
          )}
          <Center>
            <Button
              type="primary"
              htmlType="submit"
              style={{ margin: '24px 0px' }}
              size="large"
              block
            >
              ログイン
            </Button>
          </Center>
          <Link to={'/signup'}>登録はこちら</Link>
        </Form>
      </Content>
    </Container>
  )
}

export default Signin

const Container = styled.div`
  padding-top: 67px;
`

const Content = styled.div`
  background-color: #ffffff;
  padding: 24px;
  width: 330px;
  margin: 28px auto;
  border-radius: 2px;
`

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  margin-bottom: 24px;
`

const Center = styled.div`
  display: flex;
  justify-content: center;
`
