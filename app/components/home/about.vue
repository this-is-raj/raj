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
                    <p class="margin-b-50">{{ aboutMe }}</p>

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
          aboutMe: 'Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque\n' +
          ' sit amet sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
          ' Nulla maximus pellentes que velit, quis consequat nulla effi citur at.\n' +
          ' Maecenas sed massa tristique.Duis non volutpat arcu, eu mollis tellus.\n' +
          ' Sed finibus aliquam neque sit amet sodales. Lorem ipsum dolor sit amet,\n' +
          ' consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur\n' +
          ' adipiscing elit. Nulla maximus pellentes que velit, quis consequat nulla\n' +
          ' effi citur at.Maecenas sed massa tristique.',
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
