import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
    const isLoggedIn = ref(false)
    const userInfo = ref(null)

    const login = (userData: any) => {
        isLoggedIn.value = true
        userInfo.value = userData
        // 可以在这里保存到localStorage
        localStorage.setItem('userInfo', JSON.stringify(userData))
    }

    const logout = () => {
        isLoggedIn.value = false
        userInfo.value = null
        localStorage.removeItem('userInfo')
    }

    const checkLoginStatus = () => {
        const savedUserInfo = localStorage.getItem('userInfo')
        if (savedUserInfo) {
            isLoggedIn.value = true
            userInfo.value = JSON.parse(savedUserInfo)
        }
    }

    const requireLogin = () => {
        if (!isLoggedIn.value) {
            alert('请先登录')
            return false
        }
        return true
    }

    return {
        isLoggedIn,
        userInfo,
        login,
        logout,
        checkLoginStatus,
        requireLogin
    }
}) 