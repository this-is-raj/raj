<template>
    <header>
        <div class="container">
            <div class="heading-wrapper">
                <div class="row">
                    <div class="col-sm-6 col-md-6 col-lg-4">
                        <div class="info">
                            <i class="icon ion-ios-location-outline"></i>
                            <div class="right-area">
                                <h5>{{ address.title }}, {{ address.line }}</h5>
                                <h5>{{ `${ address.town }, ${ address.city }, ${ address.state }, ${ address.country }, ${ address.zip }`}}</h5>
                            </div><!-- right-area -->
                        </div><!-- info -->
                    </div><!-- col-sm-4 -->

                    <div class="col-sm-6 col-md-6 col-lg-4">
                        <div class="info">
                            <i class="icon ion-ios-telephone-outline"></i>
                            <div class="right-area">
                                <h5>{{ phone.no }}</h5>
                                <h6>{{ phone.available }}</h6>
                            </div><!-- right-area -->
                        </div><!-- info -->
                    </div><!-- col-sm-4 -->

                    <div class="col-sm-6 col-md-6 col-lg-4">
                        <div class="info">
                            <i class="icon ion-ios-chatboxes-outline"></i>
                            <div class="right-area">
                                <h5>{{ email.address }}</h5>
                                <h6>{{ email.replyPeriod}}</h6>
                            </div><!-- right-area -->
                        </div><!-- info -->
                    </div><!-- col-sm-4 -->
                </div><!-- row -->
            </div><!-- heading-wrapper -->

            <a class="downlad-btn" :href="cvDownloadLink" download>Download CV</a>
        </div><!-- container -->
    </header>
</template>

<script>
export default {
  data () {
      return {
          address: {
              title: '21 Ashiyana',
              line: 'Tulsi Nagar',
              town: 'Sanganer',
              city: 'Jaipur',
              state: 'Raj',
              country: 'India',
              zip: '302033'
          },
          phone: {no: '+91-8769938925', available: 'MON - SUN,8AM - 11PM'},
          email: {address: 'rajkjjn@gmail.com', replyPeriod: 'REPLY IN 24 HOURS'},
          cvDownloadLink: 'static/CV/Raj_Kumar_CV.pdf'
      };
  }
}
</script>
