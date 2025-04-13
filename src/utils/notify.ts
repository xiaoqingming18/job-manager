import { ElNotification } from 'element-plus'

import type { NotificationOptions } from 'element-plus'

const defaultOptions: Partial<NotificationOptions> = {
  duration: 3000,
  position: 'top-right',
  offset: 40,
  showClose: true,
  customClass: '',
  dangerouslyUseHTMLString: false,
}

const notify = {
  success: (message: string, title = '操作成功', opts: Partial<NotificationOptions> = {}) => {
    ElNotification({
      ...defaultOptions,
      title,
      message,
      type: 'success',
      ...opts,
    })
  },

  error: (message: string, title = '发生错误', opts: Partial<NotificationOptions> = {}) => {
    ElNotification({
      ...defaultOptions,
      title,
      message,
      type: 'error',
      ...opts,
    })
  },

  warning: (message: string, title = '操作警告', opts: Partial<NotificationOptions> = {}) => {
    ElNotification({
      ...defaultOptions,
      title,
      message,
      type: 'warning',
      ...opts,
    })
  },
}

export default notify
