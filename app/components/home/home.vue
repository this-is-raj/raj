<template>
    <div>
        <header-section/>
        <intro-section/>
        <portfolio-section/>
        <about-section/>
        <experience-section/>
        <education-section/>
        <counter-section/>
    </div>
</template>

<script>
    import headerSection from './header';
    import introSection from './intro';
    import portfolioSection from './portfolio';
    import aboutSection from './about';
    import experienceSection from './experience';
    import educationSection from './education';
    import counterSection from './counter';
    export default {
        data () {
            return {
                msg: 'Raj now describe your self.'
            }
        },
        components: {
            headerSection,
            introSection,
            portfolioSection,
            aboutSection,
            experienceSection,
            educationSection,
            counterSection
        },
        mounted () {
        },
        methods: {}
    }
</script>
