const module=[{
    path: '/home/scenicSpotIntro',
    name: 'scenicSpotIntro',
    component: resolve => void require(['@/views/scenicSpotInfo/scenicSpotIntro/index'], resolve),
    meta: {
      title: '景点介绍'
    },
  },
  {
    path: '/home/scenicSpotIntro/edit',
    name: 'editScenicSpot',
    component: resolve => void require(['@/views/scenicSpotInfo/scenicSpotIntro/edit'], resolve),
    meta: {
      title: '景点信息编辑'
    },
  },
  {
    path: '/home/activityInfo',
    name: 'activityInfo',
    component: resolve => void require(['@/views/scenicSpotInfo/activityInfo/index'], resolve),
    meta: {
      title: '活动资讯'
    }
  },
  {
    path: '/home/activityInfo/edit',
    name: 'editActivity',
    component: resolve => void require(['@/views/scenicSpotInfo/activityInfo/edit'], resolve),
    meta: {
      title: '活动资讯编辑'
    }
  },
  {
    path: '/home/bookParking',
    name: 'bookParking',
    component: resolve => void require(['@/views/bookingInfo/bookParking/index'], resolve),
    meta: {
      title: '预约停车'
    }
  }]
  export default module