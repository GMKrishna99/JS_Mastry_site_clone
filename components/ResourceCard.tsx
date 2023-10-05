
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import Link from "next/link";
import DownloadImage from '../public/downloads.svg'
import DownloadNowImage from '../public/arrow-blue.svg'

interface Props {
    id: string;
    title: string;
    image: string;
    downLoadNumber: number;
    downloadLink: string
}
const ResourceCard = ({
    id,
    title,
    image,
    downLoadNumber,
    downloadLink
}: Props) => {
    return (
        <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]">
            <Link href={downloadLink} target="_blank">
                <CardHeader className="flex-center flex-col gap-2.5 !p-0">
                    <div className="h-fit w-full">
                        <Image className="h-full rounded-md object-cover hover:opacity-75 transition-all" width={384} height={440} src={image} alt={title} />
                    </div>
                    <CardTitle className="text-white paragraph-semibold line-clamp-1 w-full text-left">{title}</CardTitle>
                </CardHeader>
            </Link>
            <CardContent className="flex-between mt-4 p-0">
                <div className="flex-center body-medium gap-1.5 text-white">
                    <Image src={DownloadImage} alt="Download" width={20} height={20} />
                    {downLoadNumber}
                </div>
                <Link href={downloadLink} className="flex-center text-gradient_purple-blue body-semibold gap-1.5 hover:gap-3 transition-all" target="_blank" >
                    Download Now
                    <Image src={DownloadNowImage} alt="Download_Now" width={13} height={0} />
                </Link>
            </CardContent>
        </Card>

    )
}

export default ResourceCard