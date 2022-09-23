let postDiv = document.getElementById('post')
let cnt = 1
let height = 5400

function loadPost(){
    $.get(`https://instagram-data-edyoda-sourav.herokuapp.com/posts/${cnt}`,function(response){
        for(let i=0;i<response.length;i++){
            postDiv.innerHTML += 
            `
                <div class='postBody'>
                    <div class='postHeader'>
                        <div class='profilePic'>
                            <img src=${response[i].user.photo}/>
                        </div>
                        <div class='userName'>
                            <p>${response[i].user.name}</p>
                        </div>
                    </div>
                    <div class='postImage'>
                        <img src=${response[i].postPic}/>
                    </div>
                    <div class='reactions'>
                        <i class='far fa-heart'></i>
                        <i class='far fa-comment'></i>
                        <i class="fa fa-send-o"></i>
                        <p class='likeCount'>${response[i].reactions} likes</p>
                    </div>
                    <div class='content'>
                        <p>
                            <span class='name'>${response[i].user.name}</span>
                            <span class='description'>${response[i].body}</span>
                        </p>
                    </div>
                    <div>
                        <input type='text' placeholder='Add a comment...' class='commentBox'/>
                    </div>
                </div>
            `
        }
    })
    cnt = cnt === 10 ? 1 : cnt+1
}
loadPost()

window.addEventListener('scroll',()=>{
    console.log(window.scrollY)
    console.log(window.innerHeight)
    if(window.scrollY + window.innerHeight >= 5400){
        height += 5400
        loadPost()
    }
})