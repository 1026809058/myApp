<template>
	<view class="login">
		<image class="login-logo" :src="logoUrl"></image>
		<view class="login-content">
			<uni-forms :modelValue="formData" class="login-form" label-position="top" ref="form" :rules="rules">
				<uni-forms-item label="账号" name="phone">
					<uni-easyinput v-model="formData.phone" placeholder="请输入账号/手机号" :styles="inputStyle"></uni-easyinput>
				</uni-forms-item>
				<uni-forms-item label="密码" name="password"><uni-easyinput v-model="formData.password" placeholder="请输入密码" type="password" /></uni-forms-item>
			</uni-forms>
			<view class="login-content-shade shade_left" :class="{ shade_left_in: loading }"></view>
			<view class="login-content-shade shade_right" :class="{ shade_right_in: loading }"></view>
		</view>
		<view class="login-sub_btn" :class="{ sub_btn_in: loading }" @click="submit"></view>
		<uni-popup ref="popup" type="message"><uni-popup-message type="error" :message="messageText" :duration="2000"></uni-popup-message></uni-popup>
	</view>
</template>

<script>
import { login } from '@/api/login.js';
export default {
	data() {
		return {
			type: 'center',
			msgType: 'success',
			messageText: '这是一条成功提示',
			loading: false,
			logoUrl: require('@/static/logo/logo_wrj.png'),
			formData: {
				phone:17353166287,
				password:13272911208
				
			},
			//输入框样式
			inputStyle: {
				color: '#000',
				borderColor: '#fff'
			},
			rules: {
				// 对phone字段进行必填验证
				phone: {
					// phone 字段的校验规则
					rules: [
						// 校验 phone 不能为空
						{
							required: true,
							errorMessage: '请填写账号'
						}
					],
					validateTrigger: 'submit'
				},
				password: {
					rules: [
						{
							required: true,
							errorMessage: '请填写密码'
						}
					],
					validateTrigger: 'submit'
				}
			}
		};
	},
	onReady() {},
	methods: {
		submit() {
			this.$refs.form
				.validate()
				.then(res => {
					const param = res;
					this.loading = true;
					login(param)
						.then(res => {
							console.log(res, 3333);
							if (res.code === 200) {
								let info = { ...this.formData, ...res.profile };
								console.log(info,8);
								uni.setStorage({
									key: 'userInfo',
									data: info,
									success: () => {
										uni.switchTab({
											url: '/pages/index/index'
										});
									},
									
								});
							} else {
								this.messageToggle('error', err.msg || '账户或密码错误！');
							}
						})
						.catch(err => {
							console.log(err);
							this.messageToggle('error', err.msg || '账户或密码错误！');
						})
						.finally(() => {
							this.loading = false;
						});
				})
				.catch(err => {
					this.loading = false;
					console.log('表单错误信息：', err);
				});
		},
		//提示信息
		messageToggle(type, msg) {
			this.msgType = type;
			this.messageText = msg;
			this.$refs.popup.open();
		}
	}
};
</script>

<style lang="scss" scoped>
.login {
	height: 100vh;
	background-color: #f03752;
	.login-logo {
		width: 200rpx;
		height: 100rpx;
		position: absolute;
		right: 10rpx;
		bottom: 10rpx;
	}
	.login-content {
		width: 500rpx;
		height: 400rpx;
		position: absolute;
		top: 50%;
		left: calc(50% - 250rpx);
		transform-origin: 50% 0;
		overflow: hidden;
		// border: 10rpx solid #fff;
		.login-title {
			color: #fff;
		}
		.login-form ::v-deep {
			.uni-forms-item__label {
				color: #fff;
			}
			.uni-forms-item__error {
				color: #fff;
			}
		}
		.login-content-shade {
			width: 50%;
			height: 100%;
			position: absolute;
			background-color: #f03752;
			transition: all 0.2s;
		}
		.shade_left {
			top: 0;
			left: -100%;
		}
		.shade_right {
			top: 0;
			right: -100%;
		}
		.shade_left_in {
			left: -0;
		}
		.shade_right_in {
			right: 0;
		}
	}
	.login-sub_btn {
		height: 100rpx;
		width: 100rpx;
		border: 1rpx solid #fff;
		position: absolute;
		left: calc(50% - 50rpx);
		top: 54%;
		background-color: #f03752;
		background-image: url('~@/static/logo/logo_btn.png');
		background-position: 0 1rpx;
		background-size: 100%;
		background-repeat: no-repeat;
		border-radius: 50%;
	}
	.sub_btn_in {
		top: 40%;
		transition: top 1s;
		animation: sub_btn_in 1s linear infinite;
	}
	@-webkit-keyframes sub_btn_in {
		0% {
			-webkit-transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
		}
	}
}

.login-content {
	-webkit-animation: login-content 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
	animation: login-content 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
@-webkit-keyframes login-content {
	0% {
		-webkit-transform: scale(0) translateZ(0);
		transform: scale(0) translateZ(0);
		opacity: 0;
	}
	70% {
		-webkit-transform: scale(0.3) translateZ(0) translateZ(160px);
		transform: scale(0.3) translateZ(0) translateZ(160px);
		opacity: 0;
	}
	100% {
		-webkit-transform: scale(1, 1) translateZ(160px) translateY(-300rpx);
		transform: scale(1, 1) translateZ(160px) translateY(-300rpx);
		opacity: 1;
	}
}
@keyframes login-content {
	0% {
		-webkit-transform: scale(0) translateZ(0);
		transform: scale(0) translateZ(0);
		opacity: 0;
	}
	70% {
		-webkit-transform: scale(0.3) translateZ(0) translateZ(160px);
		transform: scale(0.3) translateZ(0) translateZ(160px);
		opacity: 0;
	}
	100% {
		-webkit-transform: scale(1, 1) translateZ(160px) translateY(-300rpx);
		transform: scale(1, 1) translateZ(160px) translateY(-300rpx);
		opacity: 1;
	}
}
</style>
