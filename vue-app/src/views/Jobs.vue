<template>
<div>
 <pe-offres-emploi></pe-offres-emploi>
</div>
</template>



<script>

    import Jobs from "../apis/Jobs";


    export default {
  name: "Jobs",
      mounted() {

        var macarte = document.querySelector('pe-offres-emploi');
            macarte.options = {
                rechercheAuto: false,
                zoomInitial: 5,
                positionInitiale: [2.09, 46.505],
                technicalParameters: {
                  range: { value: '0-49', show: false, order: 1},
                  sort: { value: 1, show: true, order: 3}
                }
            };
        macarte.token = "i6ZIvn6TbYICNo0_L8vW7yN_INc";
    }
};




</script>



<style>
    
</style>

