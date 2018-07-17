<template>
    <section class="about-section section">
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <div class="heading">
                        <h3><b>About me</b></h3>
                        <h6 class="font-lite-black"><b>PROFESSIONAL PATH</b></h6>
                    </div>
                </div><!-- col-sm-4 -->
                <div class="col-sm-8">
                    <p class="margin-b-50" v-html="aboutMe"></p>

                    <div class="row">
                        <div v-for="skill in skills" class="col-sm-6 col-md-6 col-lg-3">
                            <div class="radial-prog-area margin-b-30">
                                <div class="radial-progress" :data-prog-percent="skill.percentage / 100" style="position: relative;">
                                    <div></div>
                                    <h6 class="progress-title">{{ skill.name }}</h6>
                                    <svg viewBox="0 0 100 100" style="display: block; width: 100%;">
                                        <path d="M 50,50 m 0,-48.5 a 48.5,48.5 0 1 1 0,97 a 48.5,48.5 0 1 1 0,-97" stroke="#eee" stroke-width="1" fill-opacity="0"></path>
                                        <path d="M 50,50 m 0,-48.5 a 48.5,48.5 0 1 1 0,97 a 48.5,48.5 0 1 1 0,-97" stroke="rgb(170,170,170)" stroke-width="1" fill-opacity="0" style="stroke-dasharray: 304.844, 304.844; stroke-dashoffset: 304.844;"></path>
                                    </svg>
                                    <div class="progressbar-text" style="position: absolute; left: 50%; top: 50%; padding: 0px; margin: 0px; transform: translate(-50%, -50%); color: rgb(170, 170, 170);"></div>
                                </div>
                            </div><!-- radial-prog-area-->
                        </div><!-- col-sm-6-->
                    </div><!-- row -->
                </div><!-- col-sm-8 -->
            </div><!-- row -->
        </div><!-- container -->
    </section><!-- about-section -->
</template>

<script>
export default {
  data () {
      return {
          aboutMe: 'On the one end I am a professional <strong>PHP developer</strong> (Mainly working with Laravel and VueJS framework) and on the other end I am a <strong>Machine Learning</strong> Enthusiast having completed many challenging project with languages like <strong>Python</strong> and <strong>MATLAB</strong>, Now I am looking for some job opportunity which can fulfill my hunger to work with some challenging and exciting stuff in collaboration of above two fields.',
          skills: [{
              name: 'Web Designing',
              percentage: 97
          },{
              name: 'Machine Learning',
              percentage: 92
          },{
              name: 'Data Analytics',
              percentage: 80
          },{
              name: 'Electrical Engineering',
              percentage: 72
          }
          ],
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
