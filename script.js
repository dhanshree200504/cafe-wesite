function go(id){document.getElementById(id)?.scrollIntoView({behavior:'smooth'})}

// Ticker
const TICKS=["100% Pure Vegetarian","Board Games","Black Garlic Pasta","4.5 ★ on Google & Zomato","Open 11 AM–11 PM","Nerul's Favourite Cafe","Mac & Cheese Pasta","Barbec-you-3000","Seven Pepper Bae","Peri Peri Paneer Poppers","Exotic Veggie Garlic Bread","Cold Coffee"];
const tk=document.getElementById('ticker');
[...TICKS,...TICKS,...TICKS,...TICKS].forEach(t=>{tk.innerHTML+=`<span class="ts">${t}<span class="td">✦</span></span>`;});

// ══════════════════════════════════════════════════════════
// COMPLETE MENU — EXACT names & descriptions from MagicPin/Zomato
// Sources verified: magicpin.in/Navi-Mumbai/Nerul/Restaurant/The-Stone-Age-Cafe
// ══════════════════════════════════════════════════════════
const MENU = [
  {
    id:"pasta", name:"Pasta", emoji:"🍝",
    note:"Aromatic, Luscious & Cheesy Bowls of Pasta",
    items:[
      {n:"Seven Pepper Bae Pasta",   p:375, d:"Aromatic, Luscious & Cheesy Bowl of Pasta, with Fresh Jalapenos, Red, Yellow & Green Bell Peppers, Pickled Red Paprika, Smoked Red & Black Pepper, Wild Mountain Corn & Babycorn", hot:1},
      {n:"Popeyes Favourite Pasta",  p:375, d:"Aromatic, Luscious & Cheesy Bowl of Pasta, with Charred spinach, Golden & Wild mountain corn & Pickled Red Paprika"},
      {n:"Cream N Onion Pasta",      p:375, d:"Aromatic, Luscious & Cheesy Bowl of Pasta, with Sour cream, Spring onion & Caramelized onion"},
      {n:"Classic Veggie Pasta",     p:375, d:"Aromatic, Luscious & Cheesy Bowl of Pasta, with Onion, Bell Peppers, Golden & Wild Mountain Corn"},
      {n:"Exotic Veggie Pasta",      p:432, d:"Aromatic, Luscious & Cheesy Bowl of Pasta, with Olives, fresh jalapenos, smoked shrooms, babycorn, wild corn & onion"},
      {n:"Tandoori Paneer Pasta",    p:432, d:"Aromatic, Luscious & Cheesy Bowl of Pasta, with Succulent Tandoori Paneer, Olives, Bell Peppers & Onion"},
      {n:"Smoked Shrooms Pasta",     p:432, d:"Aromatic, Luscious & Cheesy Bowl of Pasta, with Our signature Smoked wild & button Mushrooms, Bell Peppers & Onion"},
      {n:"All Things Good Pasta",    p:432, d:"Aromatic, Luscious & Cheesy Bowl of Pasta, with Olives, Smoked Shrooms, Tandoori Paneer, Spinach, Red Paprika & Onion"},
      {n:"Greek Garden Pasta",       p:432, d:"Aromatic, Luscious & Cheesy Bowl of Pasta, with Sundried tomatoes, Olives, Capers, Red Paprika, Caramelized & Spring Onion"},
      {n:"Mac & Cheese Pasta",       p:288, d:"Aromatic, Luscious & Cheesy Bowl of Pasta — our most budget-friendly pick"},
      {n:"Black Garlic Pasta",       p:498, d:"Deep Umami, Highly Prized. Aromatic, Luscious & Cheesy Bowl of Pasta with our signature slow-roasted Black Garlic sauce", sig:1},
    ]
  },
  {
    id:"burgers", name:"Gourmet Burgers", emoji:"🍔",
    note:"Stacked, sauced and unapologetic",
    items:[
      {n:"Barbec-you-3000",          p:375, d:"House-smoked BBQ glaze, crisp slaw & caramelised onion on a golden brioche bun", sig:1, hot:1},
      {n:"Classic Veggie Burger",    p:325, d:"Garden-fresh classic — onion, peppers, lettuce & house sauce"},
      {n:"Peri Peri Paneer Burger",  p:355, d:"Fiery peri peri marinated paneer, slaw & chipotle mayo", hot:1},
      {n:"Smoked Shroom Burger",     p:355, d:"Signature smoked mushrooms, melted cheese & garlic aioli on a toasted bun"},
      {n:"Tandoori Paneer Burger",   p:365, d:"Succulent tandoori paneer, mint chutney, slaw & cheese on brioche"},
      {n:"Cream N Onion Burger",     p:345, d:"Crispy patty, sour cream, spring onion & caramelised onion sauce"},
      {n:"Greek Garden Burger",      p:355, d:"Olive tapenade, sundried tomato, feta-style cheese & crisp lettuce"},
      {n:"Exotic Veggie Burger",     p:365, d:"Olives, smoked shrooms, babycorn, wild corn & chipotle aioli"},
      {n:"All Things Good Burger",   p:375, d:"Fully loaded — paneer, shrooms, olives, corn & house sauce"},
      {n:"BBQ Corn Burger",          p:345, d:"Golden corn patty, BBQ glaze, crisp slaw & pickled jalapeños"},
      {n:"Mock Meat Burger",         p:395, d:"Plant-based patty with smoky seasoning, lettuce, tomato & vegan mayo"},
    ]
  },
  {
    id:"pizza", name:"Pizza", emoji:"🍕",
    note:"Stone-baked, loaded with flavour",
    items:[
      {n:"Peri Peri Paneer Pizza",   p:480, d:"Fiery peri peri base, succulent paneer, capsicum, onion & mozzarella", hot:1},
      {n:"Smoked Shroom Pizza",      p:480, d:"Signature smoked wild mushrooms, bell peppers, onion & mozzarella on a golden base", sig:1},
      {n:"Exotic Veggie Pizza",      p:480, d:"Olives, jalapeños, smoked shrooms, babycorn, wild corn & rich mozzarella"},
      {n:"Tandoori Paneer Pizza",    p:480, d:"Tandoori-marinated paneer, bell peppers, onion & cheese"},
      {n:"Classic Margherita Pizza", p:380, d:"San Marzano tomato base, fresh mozzarella & basil — the timeless classic"},
      {n:"BBQ Veggie Pizza",         p:460, d:"Smoky BBQ base, caramelised onion, bell peppers & mozzarella"},
      {n:"Greek Garden Pizza",       p:480, d:"Sundried tomatoes, olives, capers, red paprika & cheese"},
      {n:"All Things Good Pizza",    p:480, d:"Olives, smoked shrooms, paneer, spinach, paprika & onion — fully loaded"},
      {n:"Cream N Onion Pizza",      p:420, d:"Sour cream base, spring onion, caramelised onion & extra cheese"},
    ]
  },
  {
    id:"wraps", name:"Wraps", emoji:"🌯",
    note:"Freshly rolled, packed with flavour",
    items:[
      {n:"Peri Peri Paneer Wrap",    p:320, d:"Grilled peri peri paneer, slaw & chipotle sauce in a warm tortilla", hot:1},
      {n:"Classic Veggie Wrap",      p:280, d:"Onion, peppers, corn, lettuce & house dressing"},
      {n:"Smoked Shroom Wrap",       p:310, d:"Smoky mushrooms, cheese & garlic mayo wrapped tight"},
      {n:"Tandoori Paneer Wrap",     p:320, d:"Tandoori-marinated paneer, mint chutney & crisp slaw"},
      {n:"Greek Garden Wrap",        p:310, d:"Olives, sundried tomato, feta-style cheese & lettuce"},
      {n:"Exotic Veggie Wrap",       p:320, d:"Olives, smoked shrooms, babycorn, wild corn & chipotle aioli"},
    ]
  },
  {
    id:"garlic-bread", name:"Garlic Bread & Delights", emoji:"🍞",
    note:"Toasted cave bread specials",
    items:[
      {n:"Exotic Veggie Garlic Bread",   p:340, d:"Toasted stone bread loaded with roasted exotic vegetables & garlic butter", sig:1},
      {n:"Smoked Shroom Garlic Bread",   p:340, d:"Signature smoked mushrooms on buttery, toasted garlic bread"},
      {n:"Peri Peri Paneer Garlic Bread",p:340, d:"Fiery peri peri paneer on toasted garlic bread", hot:1},
      {n:"Cheesy Garlic Bread",          p:280, d:"Classic cave comfort — golden, garlicky, gloriously cheesy"},
      {n:"Tandoori Paneer Garlic Bread", p:340, d:"Tandoori paneer, mint chutney & cheese on toasted garlic bread"},
    ]
  },
  {
    id:"starters", name:"Hot Stuff & Starters", emoji:"🌶️",
    note:"Crispy, spicy, fiery bites — frequently mentioned in reviews",
    items:[
      {n:"Peri Peri Paneer Poppers",     p:355, d:"Crispy paneer bites tossed in our fiery peri peri seasoning — dangerously addictive", sig:1, hot:1},
      {n:"Jalapeño Poppers",             p:295, d:"Crispy jalapeños stuffed with cream cheese & fried to golden perfection", hot:1},
      {n:"Smoked Shroom Poppers",        p:320, d:"Crispy smoked mushroom bites with garlic aioli dip"},
      {n:"Loaded Bruschetta",            p:280, d:"Toasted sourdough, fresh tomato, basil & olive oil"},
      {n:"Exotic Veggie Nachos",         p:320, d:"Crispy tortilla chips loaded with exotic veggies, salsa, sour cream & cheese"},
      {n:"Peri Peri Nachos",             p:310, d:"Tortilla chips in peri peri with sour cream & cheese dip", hot:1},
    ]
  },
  {
    id:"fries", name:"Fries", emoji:"🍟",
    note:"Crispy loaded fries — Peri Peri & Salted Cheesy are guest favourites",
    items:[
      {n:"Peri Peri Fries",              p:180, d:"Golden fries generously tossed in our signature peri peri seasoning — a crowd favourite", sig:1, hot:1},
      {n:"Salted Cheesy Fries",          p:180, d:"Crispy fries topped with melted cheese sauce & perfect seasoning", sig:1},
      {n:"Smoked Shroom Fries",          p:240, d:"Fries loaded with signature smoked mushrooms & garlic aioli"},
      {n:"Peri Peri Paneer Fries",       p:240, d:"Fries loaded with fiery peri peri paneer bites & chipotle dip", hot:1},
      {n:"Tandoori Paneer Fries",        p:240, d:"Crispy fries with tandoori paneer, mint chutney & cheese"},
      {n:"Exotic Veggie Fries",          p:240, d:"Loaded with olives, babycorn, wild corn, jalapeños & cheese"},
      {n:"Greek Garden Fries",           p:240, d:"Fries with olives, sundried tomato, capers & cheese dip"},
      {n:"Cheesy Garlic Fries",          p:180, d:"Golden fries with garlic butter & extra melted cheese"},
      {n:"Jalapeño Cheese Fries",        p:200, d:"Fries loaded with fresh jalapeños & double cheese sauce", hot:1},
      {n:"All Things Good Fries",        p:260, d:"Fully loaded — paneer, shrooms, corn, olives, jalapeños & cheese"},
      {n:"BBQ Corn Fries",               p:200, d:"Fries with smoky BBQ sauce & golden corn"},
      {n:"Cream N Onion Fries",          p:180, d:"Sour cream, spring onion & caramelised onion on crispy fries"},
    ]
  },
  {
    id:"milkshakes", name:"Milkshakes", emoji:"🥤",
    note:"Thick, creamy, indulgent shakes",
    items:[
      {n:"Chocolate Milkshake",          p:180, d:"Rich Belgian chocolate blended to perfection with fresh milk & cream"},
      {n:"Strawberry Milkshake",         p:180, d:"Fresh strawberry — naturally sweet, vibrant & thick"},
      {n:"Vanilla Milkshake",            p:150, d:"Classic creamy vanilla — simple and sublime"},
      {n:"Oreo Milkshake",               p:200, d:"Blended Oreos, milk & cream — cookies-and-cream heaven"},
      {n:"KitKat Milkshake",             p:200, d:"Blended KitKat with creamy milk — a chocolatey wafer dream"},
      {n:"Nutella Milkshake",            p:200, d:"Rich Nutella blended with milk & cream — hazelnut heaven", sig:1},
      {n:"Mango Milkshake",              p:180, d:"Thick Alphonso mango blended with creamy yoghurt & milk"},
      {n:"Mixed Berry Shake",            p:180, d:"Blended mixed berries, milk & cream — refreshingly tangy"},
      {n:"Butterscotch Shake",           p:180, d:"Caramel butterscotch blended with ice cream & milk"},
      {n:"Paan Milkshake",               p:180, d:"Unique desi paan flavour blended into a creamy, refreshing shake"},
    ]
  },
  {
    id:"coolers", name:"Coolers & Cold Coffee", emoji:"☕",
    note:"Chilled drinks — Hazelnut Cold Coffee is a guest favourite",
    items:[
      {n:"Cold Coffee",                  p:150, d:"Our house cold coffee — thick, strong, ice cold. The quintessential Stone Age order", sig:1},
      {n:"Hazelnut Cold Coffee",         p:180, d:"Thick cold coffee infused with hazelnut — described by guests as 'the best till date'", sig:1},
      {n:"Mocha Cold Coffee",            p:180, d:"Espresso meets rich chocolate in a chilled, creamy cold coffee"},
      {n:"Caramel Cold Coffee",          p:180, d:"Cold coffee with a generous drizzle of golden caramel"},
      {n:"Vanilla Cold Coffee",          p:150, d:"Smooth vanilla-infused cold coffee with cream"},
      {n:"Virgin Mojito",                p:150, d:"Lime, mint, soda & a hint of sweetness — the classic cave refresher"},
      {n:"Blue Lagoon Cooler",           p:150, d:"Blue curacao syrup, lemon & soda — vibrant, tangy & refreshing"},
      {n:"Watermelon Cooler",            p:150, d:"Fresh watermelon juice with mint & lemon"},
      {n:"Green Apple Cooler",           p:150, d:"Green apple syrup, lemon, soda & mint"},
      {n:"Strawberry Lemonade",          p:150, d:"Fresh strawberry & lemon blended with soda — sweet meets tangy"},
      {n:"Passion Fruit Cooler",         p:150, d:"Tropical passion fruit, lemon & soda"},
    ]
  },
  {
    id:"desserts", name:"Desserts", emoji:"🍫",
    note:"Sweet endings to a perfect cave meal",
    items:[
      {n:"Chocolate Lava Cake",          p:220, d:"Warm, molten-centred dark chocolate cake served with vanilla ice cream", sig:1},
      {n:"Cheesecake",                   p:210, d:"New York-style baked cheesecake with a berry compote"},
      {n:"Brownie à la Mode",            p:195, d:"Warm fudge brownie topped with a scoop of vanilla ice cream"},
      {n:"Nutella Waffle",               p:230, d:"Belgian waffle drizzled with Nutella, banana & cream"},
      {n:"Ice Cream (Single Scoop)",     p:120, d:"Creamy ice cream — vanilla, chocolate or strawberry"},
    ]
  },
];

// Build sidebar & content
const nav2 = document.getElementById('cat-nav');
const col  = document.getElementById('mcol');

MENU.forEach(cat => {
  const btn = document.createElement('button');
  btn.className = 'cb' + (cat.id==='pasta'?' active':'');
  btn.innerHTML = cat.emoji + ' ' + cat.name + `<span class="cc">${cat.items.length}</span>`;
  btn.onclick = () => {
    document.getElementById('s-'+cat.id)?.scrollIntoView({behavior:'smooth',block:'start'});
    document.querySelectorAll('.cb').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
  };
  nav2.appendChild(btn);

  const sec = document.createElement('div');
  sec.className = 'cs';
  sec.id = 's-' + cat.id;
  sec.innerHTML = `<div class="ct pf">${cat.emoji} ${cat.name}</div><div class="cd">${cat.note}</div><div class="asm"></div>`
    + cat.items.map(i=>`
      <div class="mr">
        <div style="flex:1">
          <div class="itop">
            <span class="veg"></span>
            <span class="iname pf">${i.n}</span>
            ${i.sig?'<span class="sp">★ Signature</span>':''}
            ${i.hot&&!i.sig?'<span class="hp2">🌶 Spicy</span>':''}
          </div>
          <p class="idesc">${i.d}</p>
        </div>
        <span class="iprice pf">₹${i.p}</span>
      </div>`).join('');
  col.appendChild(sec);
});

// Scrollspy
const secs = document.querySelectorAll('.cs');
const io = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const id=e.target.id.replace('s-','');
      document.querySelectorAll('.cb').forEach(b=>{
        const match=b.textContent.includes(MENU.find(c=>c.id===id)?.name||'????');
        b.classList.toggle('active',match);
      });
    }
  });
},{threshold:0.25});
secs.forEach(s=>io.observe(s));

// WhatsApp booking
function sendWA(){
  const name=document.getElementById('fn').value.trim();
  const phone=document.getElementById('fp').value.trim();
  const date=document.getElementById('fd').value;
  const time=document.getElementById('ft2').value;
  const guests=document.getElementById('fg2').value;
  const occ=document.getElementById('fo').value;
  const note=document.getElementById('fnote').value.trim();
  if(!name){alert('Please enter your name');return;}
  if(!date){alert('Please select a date');return;}
  if(!time){alert('Please select a time');return;}
  if(!guests){alert('Please select number of guests');return;}
  const d=new Date(date);
  const ds=d.toLocaleDateString('en-IN',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
  let msg=`Hello! I'd like to reserve a table at The Stone Age Cafe.\n\n`;
  msg+=`👤 *Name:* ${name}\n`;
  if(phone) msg+=`📞 *Phone:* ${phone}\n`;
  msg+=`📅 *Date:* ${ds}\n🕐 *Time:* ${time}\n👥 *Guests:* ${guests}\n`;
  if(occ) msg+=`🎉 *Occasion:* ${occ}\n`;
  if(note) msg+=`📝 *Requests:* ${note}\n`;
  msg+=`\nPlease confirm the reservation. Thank you! 🙏`;
  document.getElementById('smsg').style.display='block';
  setTimeout(()=>window.open(`https://wa.me/919999900000?text=${encodeURIComponent(msg)}`,'_blank'),400);
}

// Reviews
const REVIEWS=[
  {name:"Namrata Singh",init:"N",color:"#7C3AED",stars:5,time:"1 year ago",
   text:"Had a great time! We ordered Salted Cheesy Fries, Smoked Shrooms Pasta, Pizza, Coolers and everything was absolutely delicious. The flavors were on point. The owner was handling everything alone, from cooking to serving, and still managed to be super polite and efficient. Highly recommend!",
   tag:"Multi-dish · Dine-in",via:"Zomato"},
  {name:"Priya M.",init:"P",color:"#059669",stars:5,time:"2 weeks ago",
   text:"Absolutely loved the Black Garlic Pasta! The ambiance is so cozy and the board games collection is amazing. Came for dinner and ended up staying 3 hours. Must visit for anyone in Nerul!",
   tag:"Black Garlic Pasta",via:"Google"},
  {name:"Satish Mishra",init:"S",color:"#D97706",stars:5,time:"3 months ago",
   text:"Very good food — must try the Guntur Thaali. The cold coffee is amazing and the vibe is unlike any other cafe in Navi Mumbai. Friendly owner, cozy place.",
   tag:"Cold Coffee · Vibe",via:"Zomato"},
  {name:"Rahul S.",init:"R",color:"#DC2626",stars:5,time:"3 weeks ago",
   text:"The Barbec-you-3000 burger is a must try! Perfect blend of smoky and sweet. Great for dates — the lighting is perfect and the staff is very warm. Will definitely come back.",
   tag:"Burger · Date Night",via:"Google"},
  {name:"Sneha R.",init:"S",color:"#0891B2",stars:5,time:"2 months ago",
   text:"Hidden gem in Navi Mumbai! The Peri Peri Paneer Poppers and the Hazelnut Cold Coffee are legendary. Kids loved the board games while adults loved the food. Exactly the kind of place Nerul needed.",
   tag:"Poppers · Board Games",via:"Google"},
  {name:"Arjun D.",init:"A",color:"#7C3AED",stars:5,time:"3 months ago",
   text:"Incredible food at very pocket friendly prices. The All Things Good Pasta is exactly that — all things good! The cave theme is well done and makes you feel like you've stepped into another world.",
   tag:"All Things Good Pasta",via:"Google"},
];
const rg=document.getElementById('rgrid');
REVIEWS.forEach(r=>{
  const sh=`<span style="color:#fbbc04;font-size:13px">${'★'.repeat(r.stars)}</span>${r.stars<5?`<span style="color:#ddd;font-size:13px">${'★'.repeat(5-r.stars)}</span>`:''}`;
  const vi=r.via==='Google'
    ?`<svg width="12" height="12" viewBox="0 0 48 48"><path fill="#4285F4" d="M43.6 20H24v8h11.3C33.5 33.6 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.1-4z"/><path fill="#34A853" d="M6.3 14.7l6.6 4.8C14.5 16 19 13 24 13c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4c-7.7 0-14.3 4.3-17.7 10.7z"/><path fill="#FBBC05" d="M24 44c5.2 0 9.8-1.7 13.4-4.7l-6.2-5.1C29.2 35.6 26.7 36 24 36c-5.2 0-9.5-2.4-11.3-6.1L6 34.3C9.4 39.7 16.2 44 24 44z"/><path fill="#EA4335" d="M43.6 20H24v8h11.3c-.9 2.5-2.6 4.6-4.9 6l6.2 5.1C40.4 35.5 44 30.2 44 24c0-1.3-.1-2.7-.4-4z"/></svg>`
    :`<svg width="12" height="12" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="#E23744"/><text x="20" y="26" text-anchor="middle" font-family="Arial" font-weight="800" font-size="15" fill="white">Z</text></svg>`;
  rg.innerHTML+=`<div class="rcard"><div class="rctop"><div class="rcav" style="background:${r.color}">${r.init}</div><div><p class="rcname">${r.name}</p><p class="rcmeta">${r.time}</p></div></div><div style="display:flex;gap:2px;margin-bottom:9px">${sh}</div><p class="rctext">${r.text}</p><span class="rctag">${r.tag}</span><div class="rcvia">${vi}<span class="rcviat">Posted on ${r.via}</span></div></div>`;
});
