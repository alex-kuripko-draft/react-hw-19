import React, {useState} from 'react';
import {Form, Input, Button, Card, Typography} from 'antd';

const {Title} = Typography;

const defaultFormData = {
    name: '',
    description: '',
};

function App() {
    const [formData, setFormData] = useState(defaultFormData)
    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData({...formData, [name]: value});
    };

    const handleSubmit = () => {
        setSubmittedData({...formData});
        setFormData(defaultFormData);
    };

    const {name, description} = formData;

    return (
        <div style={{maxWidth: 600, margin: '50px auto'}}>
            <Title level={2} style={{textAlign: 'center'}}>Анкета</Title>
            <Form layout="vertical">
                <Form.Item label="Имя" required>
                    <Input
                        placeholder="Введите имя"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </Form.Item>
                <Form.Item label="Описание" required>
                    <Input.TextArea
                        rows={4}
                        placeholder="Введите описание"
                        name="description"
                        value={description}
                        onChange={handleChange}
                    />
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        onClick={handleSubmit}
                        disabled={!name || !description}
                    >
                        Отправить
                    </Button>
                </Form.Item>
            </Form>
            {submittedData && (
                <Card style={{marginTop: 20}}>
                    <Title level={4}>Отправленные данные</Title>
                    <p><strong>Имя:</strong> {submittedData.name}</p>
                    <p><strong>Описание:</strong> {submittedData.description}</p>
                </Card>
            )}
        </div>
    );
}

export default App;