import {BentoGrid,BentoGridItem} from "@/components/ui/bento-grid"

const categories=[
  {name:'Motivational'},
  {name:'Sad'},
  {name:'Party'},
  { name:'Lofi'},
  {name:'English Popular'},
  {name:'Workout'},
  {name:'Spiritual'},
  {name:'Remixes & Mashups'}
]

const bgColors=[
  'bg-red-500',
  'bg-green-500',
 'bg-blue-500',
  'bg-yellow-500',
  'bg-purple-500',
 'bg-pink-500',
  'bg-indigo-500',
  'bg-teal-500'
]

export default function Home(){
  return(
    <div className="min-h-screen bg-black py-12 px-4">
       <h1 className="text-3xl font-bold text-white text-center mb-8">
         Music Categories
       </h1>

       <BentoGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        { categories.map((cat,index)=>(
          <BentoGridItem 
            key={cat.name}
            title={cat.name}
            header={
              <div className={`w-full h-24 rounded-lg flex items-center justify-center ${bgColors[index%bgColors.length]}`}>
                 <span className="text-white text-xl font-bold">{cat.name}</span>
              </div>
            }
          />
        ))}
       </BentoGrid>
    </div>
  )
}
