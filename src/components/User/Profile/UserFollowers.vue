<template>
  <div>
    <UserProfileHeader
      :user="user"
      :authUser="authUser"
    />
    <div class="ui stackable grid container">
      <div class="four wide column">
        <UserProfileSidebarDetails :user="user"/>
      </div>
      <div class="twelve wide column">
        <div class="ui segment">
          <div class="ui two column grid">
            <UserCard
              v-for="follower in user.followers"
              :key="follower"
              :user="follower"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserProfileHeader from '@/components/User/Profile/UserProfileHeader'
import UserProfileSidebarDetails from '@/components/User/Profile/UserProfileSidebarDetails'
import UserCard from '@/components/User/Profile/UserCard'
import profileMixin from '@/mixins/profileMixin'

export default {
  name: 'UserFollowers',
  mixins: [profileMixin],
  components: {
    UserProfileHeader,
    UserProfileSidebarDetails,
    UserCard
  },
  data () {
    return {
      user: {},
      authUser: {}
    }
  }
}
</script>
