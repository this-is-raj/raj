<template>
    <section class="experience-section section">
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <div class="heading">
                        <h3><b>Work Experience</b></h3>
                        <h6 class="font-lite-black"><b>PREVIOUS JOBS</b></h6>
                    </div>
                </div><!-- col-sm-4 -->
                <div class="col-sm-8">

                    <div v-for="exp in experience" class="experience margin-b-50">
                        <h4><b class="text-uppercase">{{ exp.title }}</b></h4>
                        <h5 class="font-yellow"><b><a :href="exp.firmHref">{{ exp.firm }}</a></b></h5>
                        <h6 class="margin-t-10">{{ exp.duration }}</h6>
                        <p class="font-semi-white margin-tb-30">{{ exp.description }}</p>
                        <ul class="list margin-b-30">
                            <li v-for="list in exp.workList ">{{ list }}</li>
                        </ul>
                    </div><!-- experience -->
                </div><!-- col-sm-8 -->
            </div><!-- row -->
        </div><!-- container -->

    </section><!-- experience-section -->
</template>

<script>
export default {
  data () {
      return {
          experience: [{
              title: 'Software Developer',
              duration:'June 2017 - Present',
              firm: 'Froiden Technologies Jaipur',
              firmHref: '#',
              description: 'Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales.\n' +
              '                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus pellentes que velit,\n' +
              '                            quis consequat nulla effi citur at. Maecenas sed massa tristique.Duis non volutpat arcu,\n' +
              '                            eu mollis tellus. Sed finibus aliquam neque sit amet sodales.',
              workList: [
                  'Duis non volutpat arcu, eu mollis tellus.',
                  'Quis consequat nulla effi citur at.',
                  'Sed finibus aliquam neque sit.'
              ]
          },{
              title: 'GIS Analytics Intern',
              duration:'May 2016 - August 2016',
              firm: 'Xpanxions Int. Pvt. Ltd. Pune',
              firmHref: '#',
              description: 'Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales.\n' +
              '                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus pellentes que velit,\n' +
              '                            quis consequat nulla effi citur at. Maecenas sed massa tristique.Duis non volutpat arcu,\n' +
              '                            eu mollis tellus. Sed finibus aliquam neque sit amet sodales.',
              workList: [
                  'Duis non volutpat arcu, eu mollis tellus.',
                  'Quis consequat nulla effi citur at.',
                  'Sed finibus aliquam neque sit.'
              ]
          },{
              title: 'Design Assistence Intern',
              duration:'July 2015 - August 2015',
              firm: 'Power Grid Corporation of India Limited, Gurgaon',
              firmHref: '#',
              description: 'Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales.\n' +
              '                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus pellentes que velit,\n' +
              '                            quis consequat nulla effi citur at. Maecenas sed massa tristique.Duis non volutpat arcu,\n' +
              '                            eu mollis tellus. Sed finibus aliquam neque sit amet sodales.',
              workList: [
                  'Duis non volutpat arcu, eu mollis tellus.',
                  'Quis consequat nulla effi citur at.',
                  'Sed finibus aliquam neque sit.'
              ]
          },]
      };
  }
}
</script>
