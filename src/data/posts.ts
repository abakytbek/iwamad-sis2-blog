import type { Post } from '../types/post'

export const posts: Post[] = [
  {
    id: 'third-year-university',
    title: 'My Third Year at University',
    category: 'University',
    image: `${import.meta.env.BASE_URL}images/uni.jpg`,

    excerpt:
      'A little look into my third year of IT Management, where every subject brings something new to learn.',
    
      content: `Third year of university is definitely keeping me busy! This semester, I have five courses, and each one introduces me to a different side of IT Management.
In Accounting Information Systems, we’re learning to work with SAP, and I actually enjoy it because there’s more hands-on practice than theory. UX Design is about creating interfaces that are easy and comfortable to use. In Interactive Mobile and Web Application Development, we learn how to build applications. Enterprise Architecture helps us understand how business processes and IT systems work together, while IT Project Management focuses on planning, organizing, and managing projects.
Five courses mean five different sets of assignments, projects, and deadlines. Sometimes it feels like everything is due at the same time, but somehow, I’m still keeping up!`,

    note: 'Surviving one deadline at a time.',
  },

  {
  id: 'internship-journey',
  title: 'My Three-Month Internship Journey',
  category: 'Work',
  image: `${import.meta.env.BASE_URL}images/internship.jpg`,
  excerpt:
    'Three months of new experiences, learning, and taking my first steps into working life.',

  content: `This summer, I completed my three-month internship at telecommunication company, and it turned out to be much more than just a university requirement!
I started by working with training materials and presentations, but gradually became more involved in training new employees. The biggest surprise was becoming an official employee before my internship even ended! I became a mentoring specialist, helping newcomers learn and adapt to their new workplace.
These three months taught me a lot, not only about work but also about responsibility, communication, and stepping outside my comfort zone. What started as an internship became my first real job, and I'm excited to see what's next!`,

  note: 'Started as an intern, stayed for the journey.',
    },

  {
    id: 'autumn-lifestyle',
    title: 'Little Things I Love About Autumn',
    category: 'Lifestyle',
    image: `${import.meta.env.BASE_URL}images/hobbies.jpg`,
    excerpt:
      'Pumpkin candles, new books, and long walks — the little things making this autumn special.',

    content: `There’s something about autumn that makes me want to slow down and enjoy the little things. Recently, I went to a candle-making workshop, where I made my own pumpkin-shaped candle. I got to choose its scent and paint the mold myself. It was such a fun and relaxing experience!
I’ve also been spending more time with books. I finally finished The Castle in the Sand, although I have to admit it wasn’t really my favorite. I bought Why We Sleep, and right now I’m reading God Always Travels Incognito. What makes this book especially interesting is that I can see a few parallels with my own life.
And, of course, autumn walks! Everything looks so beautiful this time of year that sometimes I just want to walk around with no particular destination.`,

    note: 'Maybe autumn is just an excuse to romanticize everyday life a little more.',
  },

  {
    id: 'cinnamon-rolls',
    title: 'Homemade Cinnamon Rolls',
    category: 'Recipes',
    image: `${import.meta.env.BASE_URL}images/cinnamon.jpg`,

    excerpt:
      'Soft cinnamon rolls, a simple sour cream frosting, and my favorite shortcuts for homemade baking.',

    content: `I love homemade desserts, especially when the kitchen smells like cinnamon and freshly baked buns. These cinnamon rolls take a little patience while the dough rises, but my favorite part is how simple the frosting is. No complicated cream cheese mixture — just sour cream and powdered sugar!

INGREDIENTS

For the dough:
• 530 g flour
• 6 g instant dry yeast
• 80 g sugar
• 250 ml milk
• 1 large egg
• 80 g butter
• ¼ tsp salt

For the filling:
• 50–60 g melted butter
• 150 g sugar
• 3 tbsp ground cinnamon

For my lazy frosting:
• Medium-fat sour cream
• Powdered sugar, to taste

HOW I MAKE THEM

First, I mix warm milk, yeast, sugar, egg, and melted butter. Then I add flour and salt, knead the dough until soft, and leave it to rise for about 1–1.5 hours. Once it’s ready, I roll it into a rectangle, spread melted butter over it, and sprinkle it with cinnamon and sugar.
Next, I roll everything up, cut it into about 15 pieces, and let them rise for another 25–40 minutes. Then I bake them at 180°C for approximately 20–30 minutes, until golden brown.
For the frosting, I simply mix sour cream with as much powdered sugar as I want. That’s it! I spread it over the slightly cooled rolls, and they’re ready.

MY LITTLE BAKING SECRETS
The most important thing is not adding too much flour — the dough should stay soft and slightly sticky. I also try not to overbake the rolls because nobody wants dry cinnabons! For an extra soft texture, you can pour 80–100 ml of warm cream between the rolls before baking.`,
    note: 'A little cinnamon, a little patience, and a very lazy frosting.',
  },

  {
    id: 'georgia-trip',
    title: 'Six Days in Georgia',
    category: 'Travel',
    image: `${import.meta.env.BASE_URL}images/georgia.jpg`,

    excerpt:
      'Six days in Georgia with friends, beautiful places, delicious food, and memories worth keeping.',

    content: `Last summer, my friends and I decided to go on a little adventure to Georgia. What made this trip even more special was that we saved up for it ourselves. After all the planning and saving, finally being there felt amazing!
We had only six days, but somehow managed to visit Kutaisi, Tbilisi, and Batumi. Every city had something different to offer, but one of my favorite places was the Chronicles of Georgia in Tbilisi. The huge monuments and beautiful views made it especially memorable. And the food deserves its own paragraph! I still remember the delicious mushroom dishes, especially the mushrooms baked with cheese in a clay pot.
Six days went by incredibly fast, but we came home with plenty of memories, photos, and stories to tell.`,

    note: 'Good friends, new places, and really good food — what else do you need?',
  },

  {
    id: 'self-care',
    title: 'Seven Little Ways I Recharge',
    category: 'Self-Care',
image: `${import.meta.env.BASE_URL}images/self-care.jpg`,
    excerpt:
      'Seven simple things that help me slow down, recharge, and feel a little better on difficult days.',

    content: `Between university, work, and endless to-do lists, some days can feel a little overwhelming. When that happens, I’ve learned that I don’t always need big plans or exciting activities to feel better. Sometimes, the simplest things bring the most comfort.
Calling my parents is definitely at the top of my list. Hearing their voices can make even a difficult day feel a little easier. I also love the sound of rain, especially when I’m somewhere warm with a cup of hot chocolate. And honestly, a good night’s sleep can solve more problems than we sometimes realize!
Baking something sweet, taking a long walk, or getting lost in a good book are other little ways I like to recharge. None of these things are particularly extraordinary, but that’s exactly what makes them special. They’re simple reminders that it’s okay to slow down sometimes.`,

    note: 'Not every day has to be productive. Some days are just for taking care of yourself.',
  },
]