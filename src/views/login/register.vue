<template>

<div>
    <Row>
        <Col span="24" >
            <div style="" class="doc-content">
                <h5>注册</h5>
            </div>
        </Col>
    </Row>



    <Row>
        <Col span="24" >
           
           <div style="" class="doc-header">
                <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <Form-item label="姓名" prop="name">
            <Input v-model="formValidate.name" placeholder="请输入姓名"></Input>
        </Form-item>
        <Form-item label="邮箱" prop="mail">
            <Input v-model="formValidate.mail" placeholder="请输入邮箱"></Input>
        </Form-item>
        <Form-item label="选择日期">
            <Row>
                <Col span="11">
                    <Form-item prop="date">
                        <Date-picker type="date" placeholder="选择日期" v-model="formValidate.date"></Date-picker>
                    </Form-item>
                </Col>
                <Col span="2" style="text-align: center">-</Col>
            </Row>
        </Form-item>
        <Form-item label="用户类型" prop="userType">
            <Radio-group v-model="formValidate.userType">
                <Radio label="admin">公司代表</Radio>
                <Radio label="user">个人代表</Radio>
            </Radio-group>
        </Form-item>
        <Form-item label="从事领域" prop="involField">
            <Checkbox-group v-model="formValidate.involField">
                <Checkbox label="农作物"></Checkbox>
                <Checkbox label="原料"></Checkbox>
                <Checkbox label="能源"></Checkbox>
                <Checkbox label="加工品"></Checkbox>
            </Checkbox-group>
        </Form-item>
        <Form-item label="介绍" prop="desc">
            <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
        </Form-item>
        <Form-item>
            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
            <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
        </Form-item>
     <Row>
        <Col span="24" >
            <div style="" class="doc-content">
                <h5>大宗商品交易平台</h5>
            </div>
        </Col>
    </Row>
    </Form>
            </div>
        </Col>
    </Row> 
</div>

</template>
<script>
    export default {
        data () {
            return {
                formValidate: {
                    name: '',
                    mail: '',
                    city: '',
                    gender: '',
                    interest: [],
                    date: '',
                    time: '',
                    desc: ''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '姓名不能为空', trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: '邮箱不能为空', trigger: 'blur' },
                        { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
                    ],
                    city: [
                        { required: true, message: '请选择城市', trigger: 'change' }
                    ],
                    gender: [
                        { required: true, message: '请选择职权类型', trigger: 'change' }
                    ],
                    interest: [
                        { required: true, type: 'array', min: 1, message: '至少选择一个领域', trigger: 'change' },
                        { type: 'array', max: 2, message: '最多选择两个领域', trigger: 'change' }
                    ],
                    date: [
                        { required: true, type: 'date', message: '请选择日期', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请输入个人介绍', trigger: 'blur' },
                        { type: 'string', min: 5, message: '介绍不能少于5字', trigger: 'blur' }
                    ]
                },
                formDynamic: {
                    items: [
                        {
                            value: ''
                        }
                    ]
                },
            }   
        },//data
      methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                        this.$router.push({ path: '/login' });
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            },
             handleReset (name) {
                this.$refs[name].resetFields();
            },
            handleAdd () {
                this.index++;
                this.formDynamic.items.push({
                    value: "",
                    index: this.index,
                    status: 1
              });
            },
            handleRemove (index) {
                this.formDynamic.items.splice(index, 1);
            },
        }
           
    }
</script>
<style>
.login-container a{color:#0078de;}
#canvascontainer{
  position: absolute;
  top: 0px;
}
.wz-input-group-prepend{
  background-color: #141a48;
   border: 1px solid #2d8cf0;
   border-right: none;
   color:  #2d8cf0;
}




