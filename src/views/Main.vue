<template>
	<div class="room-status">
		<h1>一楼</h1>
		<el-row :gutter="20">
		<el-col :span="4">
			<div class="grid-content " @click="dialogFormVisible = true">
				<div class="room-ok"><i class="el-icon-circle-check"></i></div>
				<h2>1001</h2>
				<div class="device">
					<i class="el-icon-information"></i>
				</div>
			</div>
		</el-col>
		<el-col :span="4">
			<div class="grid-content " @click="dialogFormVisible = true">
				<div class="room-ok"><i class="el-icon-circle-check"></i></div>
				<h2>1002</h2>
				<div class="device">
					<i class="el-icon-information"></i>
				</div>
			</div>
		</el-col>
		<el-col :span="4">
			<div class="grid-content error">
				<div class="room-ok"><i class="el-icon-circle-close"></i></div>
				<h2>1003</h2>
				<div class="device">
					DISCONNECT
				</div>
			</div>
		</el-col>
		<el-col :span="4">
			<div class="grid-content " @click="dialogFormVisible = true">
				<div class="room-ok"><i class="el-icon-circle-check"></i></div>
				<h2>1004</h2>
				<div class="device">
					<i class="el-icon-information"></i>
				</div>
			</div>
		</el-col>
		</el-row>
		<h1>二楼</h1>
		<el-row :gutter="20">
		<el-col :span="4">
			<div class="grid-content " @click="dialogFormVisible = true">
				<div class="room-ok"><i class="el-icon-circle-check"></i></div>
				<h2>2001</h2>
				<div class="device">
					<i class="el-icon-information"></i>
				</div>
			</div>
		</el-col>
		<el-col :span="4">
			<div class="grid-content " @click="dialogFormVisible = true">
				<div class="room-ok"><i class="el-icon-circle-check"></i></div>
				<h2>2002</h2>
				<div class="device">
					<i class="el-icon-information"></i>
				</div>
			</div>
		</el-col>
		<el-col :span="4">
			<div class="grid-content"  @click="dialogFormVisible = true">
				<div class="room-ok"><i class="el-icon-circle-check"></i></div>
				<h2>2003</h2>
				<div class="device">
					<i class="el-icon-information"></i>
				</div>
			</div>
		</el-col>
		<el-col :span="4">
			<div class="grid-content " @click="dialogFormVisible = true">
				<div class="room-ok"><i class="el-icon-circle-check"></i></div>
				<h2>2004</h2>
				<div class="device">
					<i class="el-icon-information"></i>
				</div>
			</div>
		</el-col>
		<el-col :span="4">
			<div class="grid-content " @click="dialogFormVisible = true">
				<div class="room-ok"><i class="el-icon-circle-check"></i></div>
				<h2>2005</h2>
				<div class="device">
					<i class="el-icon-information"></i>
				</div>
			</div>
		</el-col>
		<el-col :span="4">
			<div class="grid-content " @click="dialogFormVisible = true">
				<div class="room-ok"><i class="el-icon-circle-check"></i></div>
				<h2>2006</h2>
				<div class="device">
					<i class="el-icon-information"></i>
				</div>
			</div>
		</el-col>
		<el-col :span="4">
			<div class="grid-content " @click="dialogFormVisible = true">
				<div class="room-ok"><i class="el-icon-circle-check"></i></div>
				<h2>2007</h2>
				<div class="device">
					<i class="el-icon-information"></i>
				</div>
			</div>
		</el-col>
		<el-col :span="4">
			<div class="grid-content " @click="dialogFormVisible = true">
				<div class="room-ok"><i class="el-icon-circle-check"></i></div>
				<h2>2008</h2>
				<div class="device">
					<i class="el-icon-information"></i>
				</div>
			</div>
		</el-col>
		</el-row>
		<el-dialog title="房间状态" :visible.sync="dialogFormVisible">
		<el-form>
			<el-form-item label="灯光管理" :label-width="formLabelWidth">
			<el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
			<div style="margin: 15px 0;"></div>
			<el-checkbox-group v-model="checkedLights" @change="handleCheckedLightsChange">
				<el-checkbox v-for="light in lights" :label="light" :key="light">{{light}}</el-checkbox>
			</el-checkbox-group>
			</el-form-item>
			<el-form-item label="场景设定" :label-width="formLabelWidth">
			<el-select v-model="form.region" placeholder="请选择房间场景">
				<el-option label="阅读" value="shanghai"></el-option>
				<el-option label="影音" value="beijing"></el-option>
			</el-select>
			</el-form-item>

			<el-form-item label="空调设定" :label-width="formLabelWidth">
			<el-switch
			v-model="form.acPower"
			on-text=""
			off-text="">
			</el-switch>
			</el-form-item>
			
			<el-form-item label="房间温度" :label-width="formLabelWidth">
				<el-input-number v-model="form.acTemp" :min="16" :max="30"></el-input-number>
			</el-form-item>
		</el-form>
		<div slot="footer" class="dialog-footer">
			<el-button @click="dialogFormVisible = false">取 消</el-button>
			<el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
		</div>
		</el-dialog>
	</div>
</template>

<script>
	const lightOptions = ['廊灯', '阅读灯', '卫生间', '大灯','灯带','射灯'];

	export default {
		data() {
			return {
				checkAll: true,
				checkedLights: ['廊灯', '卫生间'],
				lights: lightOptions,
				isIndeterminate: true,
				dialogTableVisible: false,
				dialogFormVisible: false,
				formLabelWidth: '120px',
				form: {
		  name: '',
		  acPower:true,
		  acTemp:22,
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
			}
		},
		methods: {
			handleCheckAllChange(event) {
				this.checkedLights = event.target.checked ? lightOptions : [];
				this.isIndeterminate = false;
			},
			handleCheckedLightsChange(value) {
				let checkedCount = value.length;
				this.checkAll = checkedCount === this.lights.length;
				this.isIndeterminate = checkedCount > 0 && checkedCount < this.lights.length;
			}
		}
	}
</script>

<style scoped lang="scss">
.room-status {
	margin-top:30px;
}
.grid-content {
	border-radius: 4px;
	min-height: 36px;
	background: #99A9BF;
	color: #FFF;
	padding: 10px;
	h2 {
		margin: 0;
	}
	.device {
		margin-top:10px;
	}
	&.error {
		background: #FF4949;
	}
	margin-bottom: 20px;
}
.room-ok {
	float: right;
	font-size: 30px;
}
h1 {
	color: #99A9BF;
	font-weight: 400;
}
</style>