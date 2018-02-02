<template>
    <section>
        <!--工具条-->
        <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
            <el-form :inline="true" :model="filters">
                <el-form-item>
                    <el-input v-model="filters.name" placeholder="姓名"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">查询</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleAdd">新增</el-button>
                </el-form-item>
            </el-form>
        </el-col>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column fixed prop="date" label="日期">
            </el-table-column>
            <el-table-column prop="name" label="姓名">
            </el-table-column>
            <el-table-column prop="province" label="省份">
            </el-table-column>
            <el-table-column prop="city" label="市区">
            </el-table-column>
            <el-table-column prop="address" label="地址" width="300">
            </el-table-column>
            <el-table-column prop="zip" label="邮编">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!--新增界面-->
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible" :close-on-click-modal="false">
            <el-form :model="form">
                <el-form-item label="日期" :label-width="formLabelWidth">
                    <el-input v-model="form.date" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="姓名" :label-width="formLabelWidth">
                    <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="省份" :label-width="formLabelWidth">
                    <el-input v-model="form.province" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="市区" :label-width="formLabelWidth">
                    <el-input v-model="form.city" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="地址" :label-width="formLabelWidth">
                    <el-input v-model="form.address" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="邮编" :label-width="formLabelWidth">
                    <el-input v-model="form.zip" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitfun" :loading="editLoading">确 定</el-button>
            </div>
        </el-dialog>
    </section>
</template>
<script>
export default {
    methods: {
        handleClick(row) {

            var that = this;
            this.dialogFormVisible = true;
            this.form = Object.assign({}, row);

        },

        handleAdd() {
            var that = this;
            this.dialogFormVisible = true;
            this.form = {
                date: '',
                name: '',
                province: '',
                city: '',
                address: '',
                zip: 0
            };
        },

        submitfun() {
            //this.dialogFormVisible = false;
            this.editLoading = true;
        }
    },

    data() {
        return {
            editLoading: false,
            dialogTableVisible: false,
            dialogFormVisible: false,
            form: {
                date: '',
                name: '',
                province: '',
                city: '',
                address: '',
                zip: 0
            },
            formLabelWidth: '120px',

            filters: {
                name: ''
            },

            tableData: [{
                date: '2016-05-03',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-04',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-01',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }]
        }
    }
}
</script>