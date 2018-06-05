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
                            <p class="margin-tb-30">{{ education.description }} </p>
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
                  description: 'Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales.\n' +
                  '                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus pellentes que velit,\n' +
                  '                                quis consequat nulla effi citur at. Maecenas sed massa tristique.Duis non volutpat arcu,\n' +
                  '                                eu mollis tellus. Sed finibus aliquam neque sit amet sodales.'
              },
              {
                  title: 'High Secondary Education in Science',
                  institution: 'S.N. Senior Secondary School, Nawalgarh, Raj',
                  passingYear: 'June 2011 (2 Years)',
                  description: 'Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales.\n' +
                  '                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus pellentes que velit,\n' +
                  '                                quis consequat nulla effi citur at. Maecenas sed massa tristique.Duis non volutpat arcu,\n' +
                  '                                eu mollis tellus. Sed finibus aliquam neque sit amet sodales.'
              },
              {
                  title: 'Secondary Education',
                  institution: 'Govt. Sr. Sec. School, Bai, Nawalgarh, Raj',
                  passingYear: 'June 2009',
                  description: 'Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales.\n' +
                  '                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus pellentes que velit,\n' +
                  '                                quis consequat nulla effi citur at. Maecenas sed massa tristique.Duis non volutpat arcu,\n' +
                  '                                eu mollis tellus. Sed finibus aliquam neque sit amet sodales.'
              }
          ],
      };
  },
}
</script>
