<template>
    <section class="intro-section">
        <div class="container">
            <div class="row">
                <div class="col-md-1 col-lg-2"></div>
                <div class="col-md-10 col-lg-8">
                    <div class="intro">
                        <div class="profile-img"><img src="../../../static/img/avatar.jpg" alt=""></div>
                        <h2><b>{{ name }}</b></h2>
                        <h4 class="font-yellow">{{ designation }}</h4>
                        <ul class="information margin-tb-30">
                            <li><b>BORN : </b>{{ dob }}</li>
                            <li><b>EMAIL : </b>{{ email }}</li>
                            <li><b>MARITAL STATUS : </b>{{ maritalStatus }}</li>
                        </ul>
                        <ul class="social-icons">
                            <li v-for="link in socialLinks"><a :href="link.link" target="_blank"><i :class="link.iconClass"></i></a></li>
                        </ul>
                    </div><!-- intro -->
                </div><!-- col-sm-8 -->
            </div><!-- row -->
        </div><!-- container -->
    </section><!-- intro-section -->
</template>

<script>
export default {
  data () {
      return {
          name: 'Raj Kumar',
          designation: 'Software Developer',
          dob: 'June 10, 1995',
          email: 'rajkjjn@gmail.com',
          maritalStatus: 'Unmarried',
          socialLinks: [
              {
                  link: 'https://www.linkedin.com/in/raj-kumar-57712a118/',
                  iconClass: 'ion-social-linkedin'
              },{
                  link: 'https://www.facebook.com/profile.php?id=100005019048627',
                  iconClass: 'ion-social-facebook'
              },{
                  link: 'https://twitter.com/raj_13ee',
                  iconClass: 'ion-social-twitter'
              }
          ]
      };
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style scoped>

</style>
