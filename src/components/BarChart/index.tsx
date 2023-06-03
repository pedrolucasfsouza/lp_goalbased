import {
    BarChart as RechartBarChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Bar
} from 'recharts';
import {Text} from "@/components/Text";
import {Box, Stack} from "@chakra-ui/react";
import {useWindow} from "@/hooks/useWindow";

const data = [
    {
        date: '17/10/2022',
        Compra: 16.78,
        Venda: 12.78,
    },
    {
        date: '18/10/2022',
        Compra: 18.53,
        Venda: 24.78,
    },
    {
        date: '19/10/2022',
        Compra: 21.24,
        Venda: 11.78,
    },
    {
        date: '20/10/2022',
        Compra: 44.44,
        Venda: 55.78,
    },
    {
        date: '21/10/2022',
        Compra: 55.33,
        Venda: 33.78,
    },
    {
        date: '22/10/2022',
        Compra: 22.22,
        Venda: 44.78,
    },
    {
        date: '23/10/2022',
        Compra: 16.78,
        Venda: 12.78,
    },
    {
        date: '24/10/2022',
        Compra: 18.53,
        Venda: 24.78,
    },
    {
        date: '25/10/2022',
        Compra: 21.24,
        Venda: 11.78,
    },
    {
        date: '26/10/2022',
        Compra: 16.78,
        Venda: 12.78,
    },
    {
        date: '27/10/2022',
        Compra: 18.53,
        Venda: 24.78,
    },
    {
        date: '28/10/2022',
        Compra: 21.24,
        Venda: 11.78,
    },
    {
        date: '29/10/2022',
        Compra: 16.78,
        Venda: 12.78,
    },
    {
        date: '30/10/2022',
        Compra: 18.53,
        Venda: 24.78,
    },
    {
        date: '31/10/2022',
        Compra: 21.24,
        Venda: 11.78,
    },
    {
        date: '29/10/2022',
        Compra: 16.78,
        Venda: 12.78,
    },
    {
        date: '30/10/2022',
        Compra: 18.53,
        Venda: 24.78,
    },
    {
        date: '31/10/2022',
        Compra: 21.24,
        Venda: 11.78,
    },
    {
        date: '29/10/2022',
        Compra: 16.78,
        Venda: 12.78,
    },
    {
        date: '30/10/2022',
        Compra: 18.53,
        Venda: 24.78,
    },
    {
        date: '31/10/2022',
        Compra: 21.24,
        Venda: 11.78,
    },
    {
        date: '29/10/2022',
        Compra: 16.78,
        Venda: 12.78,
    },
    {
        date: '30/10/2022',
        Compra: 18.53,
        Venda: 24.78,
    },
    {
        date: '31/10/2022',
        Compra: 21.24,
        Venda: 11.78,
    },
    {
        date: '29/10/2022',
        Compra: 16.78,
        Venda: 12.78,
    },
    {
        date: '30/10/2022',
        Compra: 18.53,
        Venda: 24.78,
    },
    {
        date: '31/10/2022',
        Compra: 21.24,
        Venda: 11.78,
    },
    {
        date: '29/10/2022',
        Compra: 16.78,
        Venda: 12.78,
    },
    {
        date: '30/10/2022',
        Compra: 18.53,
        Venda: 24.78,
    },
    {
        date: '31/10/2022',
        Compra: 21.24,
        Venda: 11.78,
    },
    {
        date: '31/10/2022',
        Compra: 21.24,
        Venda: 68,
    },
];

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        console.log({payload, label})
        return (
            <Stack>

                {payload?.map((item: any, key: any) => {
                    return (
                        <Stack key={key} spacing={0} className={`${item?.name === `Compra` ? `bg-red` : `bg-green`} flex-col p-2 rounded-md items-center`}>
                            <Text key={key} className="text-[10px]">{`${item?.name === `Compra` ? `-` : `+`}${item?.value}`}</Text>
                            <Text className="text-[10px]">{`${label}`}</Text>
                        </Stack>
                    )
                })}
                {/*<Stack spacing={0} className="bg-green flex-col p-2 rounded-md items-center">*/}
                {/*    <Text className="text-[10px]">{`${label}`}</Text>*/}
                {/*    {payload?.map((item, key) => {*/}
                {/*        return (*/}
                {/*            <Text key={key} className="text-[10px]">{`${item?.name} : ${item?.value}`}</Text>*/}
                {/*        )*/}
                {/*    })}*/}
                {/*</Stack>*/}
            </Stack>
        );
    }

    return null;
};

export function BarChart () {

    const {isMobile} = useWindow({})
    const getInterval = () => {

        const x = isMobile ? 8 : 12
        const length = data?.length
        console.log({result: Math.round(length / x)})
        return Math.round(length / x)
    }
    return (
        <ResponsiveContainer width="100%" height="100%">
            <RechartBarChart
                data={data}
                margin={{
                    left: 20,
                    top: 20,
                    right: -10
                }}
            >
                <CartesianGrid  vertical={false} horizontal={true}
                //                verticalCoordinatesGenerator={(props) => {
                //     console.log({props})
                //     const positions = []
                //
                //     const totalSize = props?.width - 60
                //     const distance = totalSize / 7
                //     console.log({totalSize})
                //
                //     for (let count = 30; count < totalSize; count = count + distance) {
                //         positions.push(count)
                //     }
                //     positions.push(totalSize + 30)
                //     console.log({positions})
                //
                //     return positions
                // }}
                />
                <XAxis  dataKey="date" tickMargin={15} interval={getInterval()} fontSize={8} tick={{
                    fill: "white",
                }} />
                <YAxis orientation={"right"} tickMargin={15}  interval={0} fontSize={8} tick={{
                    fill: "white",
                }} />
                <Tooltip content={<CustomTooltip />}  cursor={{fill: 'rgba(255,255,255, .1)'}}/>
                {/*<Legend />*/}
                <Bar dataKey="Compra" className={""} fill="#5DB771" />
                <Bar dataKey="Venda" fill="#F17878" />
            </RechartBarChart>
        </ResponsiveContainer>
    )
}