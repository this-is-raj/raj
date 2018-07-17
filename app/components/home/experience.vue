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
                        <div v-html="exp.description"></div>
                        </p>
                        <ul class="list margin-b-30">
                            <li v-for="list in exp.workList" v-html="list"></li>
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
              firmHref: 'https://froiden.com/',
              description: '<p class="font-semi-white margin-tb-30 text-left">The major part of the work of Froiden technologies is to develop Web Application, here working as a a full stack PHP and Node developer, I have completed many complex, high-quality, innovative and fully functioning projects belonging to various fields of operations such as:</p>' +
              '<div class="text-left">' +
                  '<table class="m-auto">' +
                      '<tbody>' +
                          '<tr>' +
                            '<td class="pr-5">Cryptocurrency Market</td>' +
                            '<td class="pl-5">E-Commerce</td>' +
                          '</tr>' +
                              '<td class="pr-5">Entertainment</td>' +
                              '<td class="pl-5">Corporation Management</td>' +
                          '</tr>' +
                              '<td class="pr-5">News & Events</td>' +
                              '<td class="pl-5">Automated Loan Processing</td>' +
                          '</tr>' +
                      '</tbody>' +
                  '</table>' +
              '</div>' +
              '<p class="font-semi-white margin-tb-30 text-left">' +
                  'Using <strong>advance and modern technologies</strong> such as:</p>' +
              '<div class="text-left">' +
                  '<table class="m-auto">' +
                      '<tbody>' +
                          '<tr>' +
                              '<td class="pr-5">Laravel</td>' +
                              '<td class="pr-5">VueJS</td>' +
                              '<td class="pr-5">Rest Api</td>' +
                              '<td class="pr-5">Two factor authentication</td>' +
                          '</tr>' +
                              '<td class="pr-5">Google Analytics</td>' +
                              '<td class="pr-5">JQuery</td>' +
                              '<td class="pr-5">Bootstrap</td>' +
                              '<td class="pr-5">Intervention image</td>' +
                          '</tr>' +
                              '<td class="pr-5">OAuth</td>' +
                              '<td class="pr-5">Ajax</td>' +
                              '<td class="pr-5">Data Tables</td>' +
                              '<td class="pr-5">Excel and CSV sheets</td>' +
                          '</tr>' +
                          '</tr>' +
                              '<td class="pr-5">JWT Auth</td>' +
                              '<td class="pr-5">Maps</td>' +
                              '<td class="pr-5">Charts</td>' +
                              '<td class="pr-5">Modules</td>' +
                          '</tr>' +
                          '</tr>' +
                              '<td class="pr-5">Mail tracker</td>' +
                              '<td class="pr-5">V-tables</td>' +
                          '</tr>' +
                      '</tbody>' +
                  '</table>' +
              '</div>',
              workList: [
              ]
          },{
              title: 'GIS Analytics Intern',
              duration:'May 2016 - August 2016',
              firm: 'Xpanxions Int. Pvt. Ltd. Pune',
              firmHref: '#',
              description: '<p class="font-semi-white margin-tb-30">During this Internship I worked as a Geographical Information System Analyst in FirstFuel Software (A client of Xpanxion Int. Pvt. Ltd.) and complete various project based on GIS Analytics using tools like:</p>',
              workList: [
                  'Quantum GIS',
                  'Post GIS',
                  'PostgreSQL',
                  'LiDAR'
              ]
          },{
              title: 'Design Assistence Intern',
              duration:'July 2015 - August 2015',
              firm: 'Power Grid Corporation of India Limited, Gurgaon',
              firmHref: '#',
              description: '<p class="font-semi-white margin-tb-30">During this Internship program I worked as Design Engineer Associate, and worked upon the project <strong>“Selection of Conductor”</strong> for extra high voltage AC transmission line.</p>',
              workList: [
              ]
          },]
      };
  }
}
</script>

<style scoped>
    .text-left table {
        margin: 0 auto;
    }
    .text-left > table >tbody > tr > td {
        margin: 0 15px;
    }
</style>
