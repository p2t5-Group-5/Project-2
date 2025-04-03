import { useState, useEffect, useLayoutEffect } from "react";
import { retrieveUsers } from "../api/userAPI";
import type { UserData } from "../interfaces/UserData";

const welcome = () =>{

return(
<>
<Header/>
<Navbar/>
<main>
<h2>Welcome!</h2>
<section className="flex">
<div className="seller">
<img src="" alt="Seller" />
<p>

</p>
</div>

<div className="item">
<img src="" alt="Item" />
<p>

</p>
</div>

</section>

</main>
<Footer/>  
</>
); 
}

export default welcome;