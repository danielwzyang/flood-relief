import Navbar from "@/components/ui/navbar"
import "./globals.css"
import background from "../assets/bg.jpg"
import Image from "next/image"
import TeamCard from "@/components/ui/teamcard"

const events = [
    {
        start: new Date(2024, 9, 1),
        end: new Date(2024, 9, 1),
        title: 'Event 1',
    },
    {
        start: new Date(2024, 9, 2),
        end: new Date(2024, 9, 2),
        title: 'Event 2',
    },
];

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
                    facebook=""
                    instagram=""
                    email=""
                />
                <TeamCard
                    name="Seoyeon Yu"
                    position="president"
                    bio="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste corrupti fugit sit dolores aperiam doloribus explicabo laborum cupiditate sequi perspiciatis?"
                    facebook=""
                    instagram=""
                    email=""
                />
                <TeamCard
                    name="Thomas Choi"
                    position="president"
                    bio="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste corrupti fugit sit dolores aperiam doloribus explicabo laborum cupiditate sequi perspiciatis?"
                    facebook=""
                    instagram=""
                    email=""
                />
                <TeamCard
                    name="Daniel Yang"
                    position="it director"
                    bio="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste corrupti fugit sit dolores aperiam doloribus explicabo laborum cupiditate sequi perspiciatis?"
                    facebook=""
                    instagram=""
                    email=""
                />
            </div>
            <p className="m-auto my-10 w-[1200px] max-w-[85vw] text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum qui, deserunt et libero accusamus rem non eligendi aliquam minima ratione! Doloremque nesciunt dicta omnis placeat pariatur dolore iusto beatae perspiciatis fuga molestias, hic voluptates non? Provident quaerat quasi labore voluptates. Minima quisquam saepe dolorem amet, nihil sapiente ut. Doloribus laudantium quam quis modi numquam voluptatibus! Ut tenetur nesciunt unde, beatae expedita voluptas? Perspiciatis, voluptas ratione magnam provident, repudiandae, quis eos rerum quaerat aspernatur deleniti ea placeat dolor nam debitis delectus laboriosam et! Iure, maxime illo ipsa, consequatur est soluta vel libero dignissimos vitae error quis fuga necessitatibus! Cupiditate quis incidunt sint quaerat dignissimos soluta, id illo nesciunt beatae aspernatur voluptas similique recusandae excepturi. Error aliquam consequatur, ex ullam iusto eveniet laborum, perferendis, modi tempore sunt ipsa autem fuga saepe a voluptatem neque animi commodi alias eaque. Architecto, optio adipisci asperiores autem, odit nesciunt exercitationem nisi a doloremque minus, in aut beatae nam. Voluptates ullam laudantium cumque beatae rem. Repellat error distinctio modi in autem. Numquam, adipisci ratione aspernatur a, vitae dignissimos ullam soluta magni voluptas cum, rerum alias mollitia vel incidunt quidem optio error possimus ex ipsam est? Adipisci reiciendis beatae, sunt repellat temporibus cupiditate distinctio dolorum voluptatibus quasi atque, iste possimus iusto rem ratione ea cumque dicta eligendi aspernatur aperiam libero magnam delectus. Eaque ad ex soluta est eius animi dolore magni, possimus molestiae natus ut, in ducimus perferendis architecto sunt dignissimos voluptate cumque libero error veritatis? Earum veniam nemo tempore maxime optio atque praesentium necessitatibus dignissimos voluptate harum molestias est, iure maiores totam officia ex placeat dicta sint reprehenderit id voluptatem quo? Debitis autem incidunt distinctio cupiditate eius explicabo tenetur, obcaecati vero, accusamus perferendis corporis optio animi ipsum quia molestias culpa impedit fugiat repudiandae vitae a necessitatibus, ut officiis provident! Commodi laborum repellat corrupti voluptatem animi saepe beatae laudantium ipsa vel unde asperiores sed, excepturi quia? Placeat voluptates non odit culpa numquam, nobis tenetur corporis error consequatur explicabo, perferendis maxime veniam qui consectetur quaerat voluptatum! Adipisci facilis magnam molestiae porro beatae dolore deleniti ab? Molestiae harum eligendi doloremque laborum alias, voluptatibus, cupiditate fugiat expedita minima delectus, repudiandae dolor ullam architecto inventore veritatis debitis sequi nesciunt. At aperiam deserunt tempore unde placeat harum iure officia hic nemo tempora asperiores soluta, suscipit facere quo. Aspernatur, iure nemo consectetur cumque quas obcaecati sunt ratione, placeat hic nobis possimus animi expedita omnis tempore tenetur sit sed aliquid facere! Esse maiores cumque nemo expedita beatae reiciendis voluptas illo atque sed fugit ratione nobis, officiis, explicabo suscipit mollitia magni dicta quos vel rem. Molestiae maxime voluptatum, alias eos iusto mollitia doloribus distinctio est deserunt nisi asperiores incidunt sequi itaque commodi assumenda, voluptas culpa? Dolorem, minima id! Aperiam quasi, illum voluptatem rem accusantium delectus modi ratione hic temporibus dolore explicabo veniam veritatis quos a quae quo consequatur dolorem non! Facere optio, voluptate perspiciatis deleniti quibusdam at incidunt rerum! Eveniet aut repudiandae vel mollitia totam, enim, molestiae culpa ullam aliquid quasi dignissimos! Perferendis ipsam ex assumenda provident iste, minus natus repudiandae, deleniti doloribus iure nostrum ab voluptate tenetur atque tempora neque. Asperiores inventore labore corrupti atque repellat minus molestias, deleniti quasi obcaecati dolor consequatur veritatis ullam omnis quas quae non qui. Id, quisquam cumque reiciendis vitae, numquam odio reprehenderit optio maxime sapiente eos, voluptatem dicta. Animi est facilis laboriosam id deserunt veniam vel, ducimus minima, assumenda suscipit unde maxime praesentium? Quo minus in assumenda reiciendis rem vel, totam dicta, molestiae nihil earum accusantium minima, repellat veniam placeat tenetur odio quas sunt deserunt corporis magni sequi quidem voluptatem? Omnis blanditiis, cumque illo doloribus illum quas labore corporis, similique, recusandae consequuntur dolores incidunt. Maiores repellat, voluptatum obcaecati amet unde exercitationem odit voluptatibus voluptate, doloremque nam soluta natus sapiente, reprehenderit reiciendis officia iure fugit. Debitis sequi reprehenderit tempora repellendus neque. Esse nemo cumque sapiente. Id odit soluta aperiam commodi expedita voluptatibus quasi fugit quaerat atque in, quam laudantium! Cum, id! Commodi ad nam molestiae! Ipsam, nesciunt ad? Obcaecati veniam vel nostrum cumque, at quidem laudantium cum fugiat incidunt facilis quo architecto quae sapiente eveniet omnis maiores animi praesentium nisi dolorem ducimus recusandae voluptas. Adipisci voluptates illo illum, vero est ipsum. Iure consequatur quasi earum blanditiis rem obcaecati nesciunt natus quisquam, aliquid deleniti vero cum necessitatibus sit numquam possimus neque incidunt eum, aperiam, magnam laborum amet veniam quam quae excepturi. Harum iure maiores temporibus nihil porro facilis, numquam, voluptatum quam quia fugiat suscipit odit voluptas, amet adipisci laborum blanditiis ipsam repudiandae! Ratione, enim laborum consequuntur modi aspernatur rem, repudiandae, veniam expedita non culpa dolorem. Voluptas alias, sequi unde sint, officiis quam quod dicta rerum, possimus iure similique dolorum tempore reprehenderit! Vel, alias fugiat itaque expedita aliquid hic ducimus optio incidunt laborum dicta deleniti sit ad magni molestias at. Id, quis? Et, inventore, possimus voluptates aliquid earum, nostrum eius tempora excepturi voluptate omnis neque suscipit laudantium quibusdam ipsa? Officia fuga recusandae placeat maiores molestiae voluptatem eius quasi voluptates incidunt atque porro, aliquid veniam eaque ipsum suscipit obcaecati earum quis consequuntur? Sed non enim ipsa fugit distinctio eius reprehenderit molestias tempora rem officiis. Voluptatibus, impedit! Veritatis nostrum dignissimos earum, placeat voluptatum fugit itaque accusamus, molestiae neque minus aut! Consectetur voluptates repellat alias suscipit nobis, molestias commodi molestiae nisi laboriosam aliquam. Numquam esse vel unde, amet commodi consequuntur sapiente aspernatur. Voluptate accusantium, quisquam, soluta quas sit libero repellendus illum veritatis earum, cum nulla ab laborum eaque! Facilis commodi laboriosam neque possimus unde, est quod. Deleniti necessitatibus corporis ullam aut quam voluptate minima dolores quisquam quis? Voluptates expedita ex illo optio ea laborum eligendi ipsam deleniti ratione, amet, reiciendis esse quibusdam blanditiis magni impedit tempora officiis neque! Eius rem itaque ratione exercitationem sed quaerat voluptatem? Aliquam ratione labore inventore unde provident nemo, consectetur dolorem, minima quod, pariatur sapiente adipisci. Ab debitis ad vitae nemo culpa esse odio velit, laudantium officiis doloribus aspernatur expedita vel, molestiae dolorum quos optio, quae praesentium sequi dignissimos ipsa facere sint corporis quidem deleniti! Quis voluptatum consectetur ab, repudiandae, expedita a nam iste, ratione tempore ullam dignissimos? Ullam consequatur voluptate nobis? Impedit eum nesciunt sit excepturi maiores. Consequatur, adipisci nostrum?
            </p>
        </div>
    )
}