new fullpage('#fullpage', {
    autoScrolling:true,
    sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
    navigation: true,
    onLeave: (origin,destination,direction)=> {
        const section = destination.item;
        console.log(section);
        TweenMax.fromTo(section, 1, {opacity: 0}, {opacity: 1},'+=700');
    }
});

new fullpage("#fullpage",{
    autoscrolling: true,
    navigation: true,
    onleave: (origin,destination,direction) => {
        const section = destination.item;
        const title = section.querselector("h1");
        const tl = new timeLinemMax({ delay: 0.5 });
        tl.fromTo(title,0.5, {y: "50" , opacity : 0} , {y: 0, opacity: 1});

        if(destination.index === 1){
            const imgs = document.querySelector('.imgs');
            const info = document.querySelector('.info');

            tl.fromTo(imgs, 0.7, {x: '100%'}, {x: '-30%'})
            .fromto(imgs [0], 1, {opacity: 0}, {opacity: 1})
            .fromto(imgs [1], 1, {opacity: 0}, {opacity: 1})
            .fromto(imgs [2], 1, {opacity: 0}, {opacity: 1})
        }
    }
})

