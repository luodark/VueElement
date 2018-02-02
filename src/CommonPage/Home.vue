<template>
    <el-container>
        <el-header>Header


            <el-dropdown class="right">
              <span class="el-dropdown-link">
                下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>

            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>

    </el-header>
    <el-container>
        <el-aside width="200px">
            <el-menu :default-active="$route.path" @select="handleSelect">



                <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
                    <el-submenu :index="index+''" v-if="!item.leaf">
                        <template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
                        <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
                    </el-submenu>
                    <el-menu-item v-if="item.leaf&&item.children.length>0 && !item.children[0].hidden" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
                </template>


<!--
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message"></i>导航一</template>
                    <el-menu-item-group>
                        <el-menu-item index="/">选项0</el-menu-item>
                        <el-menu-item index="/xxx/Form">选项1</el-menu-item>
                        <el-menu-item index="/Table">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="/Login">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="1-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                    <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="2-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="2-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="2-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title"><i class="el-icon-setting"></i>导航三</template>
                    <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="3-1">选项1</el-menu-item>
                        <el-menu-item index="3-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="3-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="3-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="3-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
            -->

        </el-menu>
    </el-aside>
    <el-main>
        <router-view>welcome</router-view>
    </el-main>
</el-container>
</el-container>
</template>
<style>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
}

.el-aside {
    color: #333;
}
</style>
<script>
export default {
    data() {

        return {
            activemenu: '1-0'
        }
    },
    methods: {

        handleSelect(key, keyPath) {
            var that = this;
            debugger;
            this.$router.push(key);
        },


        logout: function () {
            var _this = this;
            this.$confirm('确认退出吗?', '提示', {
                    //type: 'warning'
                }).then(() => {
                    sessionStorage.removeItem('user');
                    _this.$router.push('/login');
                }).catch(() => {

                });


            },

        },
    };
    </script>
    <style type="text/css">
    .right{
        float: right;
        cursor: pointer;
    }
    </style>