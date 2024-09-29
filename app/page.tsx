import Navbar from "@/components/ui/navbar"
import "./globals.css"
import background from "../assets/bg.jpg"
import Image from "next/image"
import TeamCard from "@/components/ui/teamcard"

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="h-[60px] w-full flex items-center justify-center ">
                <h1 className="text-xl sm:text-2xl">Flood Relief Network</h1>
            </div>
            <Image src={background} alt="background" className="w-full max-h-[750px] object-cover object-center" />
            <div className="my-10 flex flex-wrap w-fit justify-center mx-auto">
                <TeamCard
                    name="Junghoon Yu"
                    position="president"
                    bio="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste corrupti fugit sit dolores aperiam doloribus explicabo laborum cupiditate sequi perspiciatis?"
                    facebook=":("
                    instagram="yungyooon"
                    mail=":("
                />
                <TeamCard
                    name="Seoyeon Yu"
                    position="president"
                    bio="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste corrupti fugit sit dolores aperiam doloribus explicabo laborum cupiditate sequi perspiciatis?"
                    facebook=":("
                    instagram="shkoyeon"
                    mail=":("
                />
                <TeamCard
                    name="Thomas Choi"
                    position="president"
                    bio="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste corrupti fugit sit dolores aperiam doloribus explicabo laborum cupiditate sequi perspiciatis?"
                    facebook=":("
                    instagram="thomas._.cho1"
                    mail=":("
                />
                <TeamCard
                    name="Daniel Yang"
                    position="it director"
                    bio="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste corrupti fugit sit dolores aperiam doloribus explicabo laborum cupiditate sequi perspiciatis?"
                    facebook="@danielwzyang"
                    instagram="@danielwzyang"
                    mail="danielwzyang@gmail.com"
                />
            </div>
            <p className="m-auto my-10 w-[1200px] max-w-[85vw] text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe perferendis eveniet eius voluptatem vitae possimus ducimus amet quae commodi delectus, placeat veritatis deserunt quibusdam dignissimos nihil debitis enim. Voluptate ipsam odit voluptates rem a iusto ullam exercitationem repellendus doloremque. Eos expedita rerum omnis cumque aliquid magnam deleniti unde! Doloremque consectetur, eveniet alias deserunt repudiandae inventore impedit unde voluptatibus corrupti, culpa excepturi optio enim fuga magnam amet voluptate vel. Labore ea, totam quaerat debitis error adipisci blanditiis eaque consectetur nihil placeat voluptates, pariatur impedit? Voluptatibus sit libero iste harum, recusandae nulla maxime, dolorem alias expedita cumque quibusdam ratione. Excepturi veritatis ducimus cum quasi amet exercitationem aperiam sed minima doloremque omnis cupiditate error, ea nostrum, nemo, necessitatibus consequuntur iure dignissimos quae assumenda illum distinctio ipsa atque accusantium voluptatum? At id tempora, impedit suscipit excepturi ullam earum provident repudiandae alias. Corrupti et, quas quos nisi molestiae veritatis recusandae, reiciendis possimus, consequatur perspiciatis nam? Hic numquam officia provident molestiae error earum id voluptates, accusamus nemo? Iste vel reiciendis tempora. Repellendus atque aut placeat quas hic ducimus, voluptatum neque perspiciatis maiores quod blanditiis doloremque, delectus corrupti, enim vitae. Vel magnam voluptas id, commodi porro rem modi quos impedit reiciendis et, esse recusandae ex ipsam voluptatem dolorum voluptates suscipit accusamus dolorem, eius fuga sapiente. Iste perferendis laboriosam at eos, ipsam porro unde fugit quibusdam eligendi distinctio animi sequi ab explicabo soluta maiores harum facilis voluptatem dolores dolore amet dolorum adipisci officia rerum consectetur. Distinctio, dolorem asperiores et eum officia repudiandae magnam, necessitatibus quis molestias saepe dicta neque, omnis nulla nobis accusantium molestiae ipsa sapiente laboriosam incidunt eaque! Corporis facere natus tempora tenetur voluptate cum perspiciatis. Aut repudiandae reprehenderit, quae temporibus dolore iusto esse tenetur quaerat, est, eos ipsam assumenda consequuntur cupiditate iure? Provident veritatis cumque nesciunt? Laudantium amet accusamus facere nam reprehenderit. Pariatur repellat similique quis quo fugiat asperiores, commodi labore repudiandae animi esse, laborum, quidem exercitationem nam error laboriosam obcaecati sed quod! A qui fugit sunt, asperiores repellat omnis molestiae sit deleniti, in et voluptatibus earum iure voluptate est assumenda vitae amet consequatur beatae quis. Obcaecati, explicabo suscipit expedita id ex adipisci ab eligendi soluta incidunt tempore dolor ratione optio assumenda? Soluta, beatae quia eum aperiam consectetur quas quos laudantium quis non neque, omnis nemo quam minus nobis. Culpa, numquam possimus sapiente inventore earum iste autem. Illum doloremque ut laudantium pariatur, esse obcaecati temporibus labore, animi commodi adipisci, veritatis illo repudiandae ducimus error eligendi velit corrupti. Voluptas error accusamus adipisci aut ex, eius doloribus aliquid similique eos commodi quod cumque aspernatur, ipsam accusantium culpa cupiditate autem ipsum voluptatem ratione. Accusamus nulla eaque consequuntur earum minus culpa ipsum omnis iure vitae, atque voluptate, alias similique quam voluptates, necessitatibus cum. Quos repellendus quam atque assumenda porro ex?
            </p>
        </div>
    )
}