<template>
    <section class="education-section section">
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <div class="heading">
                        <h3><b>Education</b></h3>
                        <h6 class="font-lite-black"><b>ACADEMIC CAREER</b></h6>
                    </div>
                </div><!-- col-sm-4 -->
                <div class="col-sm-8">
                    <div class="education-wrapper">
                        <div v-for="education in educations" class="education margin-b-50">
                            <h4><b>{{ education.title }}</b></h4>
                            <h5 class="font-yellow"><b>{{ education.institution }}</b></h5>
                            <h6 class="font-lite-black margin-t-10">{{ education.passingYear }}</h6>
                            <div v-html="education.description"></div>
                        </div><!-- education -->
                    </div><!-- education-wrapper -->
                </div><!-- col-sm-8 -->
            </div><!-- row -->
        </div><!-- container -->

    </section><!-- about-section -->
</template>

<script>
export default {
  data () {
      return {
          educations: [
              {
                  title: 'Electrical Engineering',
                  institution: 'University College Of Engineering, RTU, Kota',
                  passingYear: 'Graduated in June 2017(4 Years)',
                  description: '<p class="margin-tb-30 text-left">During my graduation in Electrical Engineering at <a href="https://rtu.ac.in/" target="_blank">UCE RTU</a> I studied Following core subjects related to the Electrical engineering: </p>' +
                  '<div class="table-responsive text-left">' +
                      '<table class="m-auto">' +
                          '<tbody>' +
                          '<tr>' +
                              '<td class="pr-4 p-1">Electrical Power System</td>' +
                              '<td class="pr-4 p-1">Generation of Power</td>' +
                              '<td class="pr-4 p-1">Electrical Machines</td>' +
                          '</tr>' +
                          '<tr>' +
                              '<td class="pr-4 p-1">Transmission & Distribution of Power</td>' +
                              '<td class="pr-4 p-1">Protection of Power System</td>' +
                              '<td class="pr-4 p-1">Faults in Power System</td>' +
                          '</tr>' +
                              '<td class="pr-4 p-1">Control System</td>' +
                              '<td class="pr-4 p-1">Optimisation Techniques</td>' +
                              '<td class="pr-4 p-1">Advance Engineering Mathematics</td>' +
                          '</tr>' +
                          '</tbody>' +
                      '</table>' +
                  '</div>' +
                  '<p class="text-left">With their practical applications, analysis and simulations in <strong>MATLAB/SIMULINK</strong></p>' +
                  '<p class="text-left">And following subjects related to computer science:</p>' +
                  '<div class="table-responsive text-left">' +
                  '<table class="m-auto">' +
                  '<tbody>' +
                  '<tr>' +
                  '<td class="pr-4 p-1">DBMS</td>' +
                  '<td class="pr-4 p-1">Micro Processor</td>' +
                  '<td class="pr-4 p-1">ANSI C</td>' +
                  '</tr>' +
                  '<tr>' +
                  '<td class="pr-4 p-1">OOPS with C++</td>' +
                  '<td class="pr-4 p-1">Matlab</td>' +
                  '<td class="pr-4 p-1">Numerical Analysis</td>' +
                  '</tr>' +
                  '</tr>' +
                  '</tbody>' +
                  '</table>' +
                  '</div>'
              },
              {
                  title: 'High Secondary Education in Science',
                  institution: 'S.N. Senior Secondary School, Nawalgarh, Raj',
                  passingYear: 'June 2011 (2 Years)',
                  description: '<p class="margin-tb-30">During this course I studied:</p>' +
                  '<div class="experience margin-b-50">' +
                  '<ul class="list margin-b-30">' +
                  '<li>Physics</li>' +
                  '<li>Chemistry</li>' +
                  '<li>Mathematics</li>' +
                  '</ul>' +
                  '</div>'

              },
              {
                  title: 'Secondary Education',
                  institution: 'Govt. Sr. Sec. School, Bai, Nawalgarh, Raj',
                  passingYear: 'June 2009',
                  description:
                  '<p class="margin-tb-30">' +
                      'I studied all common subjects for basic education such as ' +
                  'Basic Mathematics, Science, Social Science and Languages Like: English, Hindi and Sanskrit.' +
                  '</p>'
              }
          ],
      };
  },
}
</script>
