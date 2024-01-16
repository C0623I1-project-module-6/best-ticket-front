import Stack from "@mui/material/Stack";
import {Card, Typography} from "antd";
import {Label} from "@headlessui/react/dist/components/label/label.js";
import {Avatar, Button, Input, Select} from "@material-tailwind/react";
import {Container} from "postcss";

function UserProfile() {
    return (
        <Stack
            className="lg:flex lg:flex-col lg:h-[auto] lg:max-w-[1300px] lg:w-[100vw] lg:p-[2rem] lg:my-[0] lg:mx-[auto] lg:gap-y-[2.5rem] lg:bg-[#ffffff]">
            <Typography className="lg:font-[500] lg:font-rubik lg:text-[24px] lg:w-[fit-content] lg:h-[fit-content]">
                Profile
            </Typography>
            <Stack className="lg:flex lg:justify-between lg:w-[100%]">
                <Stack className="lg:flex lg:flex-col lg:gap-y-[1rem] lg:w-[65%]">
                    <Stack className="lg:w-[100%] lg:flex lg:flex-col lg:gap-y-[0.4rem]">
                        <Label
                            className="lg:text-[#24232bff] lg:font-rubik lg:font-[600] lg:w-[fit-content] lg:h-[fit-content]">
                            First Name
                        </Label>
                        <Input className="lg:text-[#89909aff] lg:w-[100%] lg:py-[0.9rem] lg:px-[0.5rem]"></Input>
                    </Stack>
                    <Stack className="lg:w-[100%] lg:flex lg:flex-col lg:gap-y-[0.4rem]">
                        <Label
                            className="lg:text-[#24232bff] lg:font-rubik lg:font-[600] lg:w-[fit-content] lg:h-[fit-content]">
                            Last Name
                        </Label>
                        <Input className="lg:text-[#89909aff] lg:w-[100%] lg:py-[0.9rem] lg:px-[0.5rem]"></Input>
                    </Stack>
                    <Stack className="lg:w-[100%] lg:flex lg:flex-col lg:gap-y-[0.4rem]">
                        <Label
                            className="lg:text-[#24232bff] lg:font-rubik lg:font-[600] lg:w-[fit-content] lg:h-[fit-content]">
                            Role
                        </Label>
                        <Select className="lg:text-[#89909aff] lg:w-[100%] lg:py-[0.9rem] lg:px-[0.5rem]">
                            <Container>Admin</Container>
                            <Container>User</Container>
                        </Select>
                    </Stack>
                    <Stack className="lg:flex lg:flex-col lg:w-[100%] lg:h-[auto] lg:gap-y-[0.4rem]">
                        <Label
                            className="lg:text-[#24232bff] lg:font-rubik lg:font-[600] lg:w-[fit-content] lg:h-[fit-content]">
                            Title
                        </Label>
                        <Input className="lg:text-[#89909aff] lg:w-[100%] lg:py-[0.9rem] lg:px-[0.5rem]"></Input>
                    </Stack>
                    <Stack className="lg:flex lg:flex-col lg:w-[100%] lg:h-[auto] lg:gap-y-[0.4rem]">
                        <Label
                            className="lg:text-[#24232bff] lg:font-rubik lg:font-[600] lg:w-[fit-content] lg:h-[fit-content]">
                            Email
                        </Label>
                        <Input
                            className="lg:text-[#89909aff] lg:w-[100%] lg:h-[auto] lg:py-[0.9rem] lg:px-[0.5rem] lg:font-sans"></Input>
                    </Stack>
                    <Stack className="lg:flex lg:flex-col lg:w-[100%] lg:h-[auto] lg:gap-y-[0.4rem]">
                        <Label
                            className="lg:text-[#24232bff] lg:font-rubik lg:font-[600] lg:w-[fit-content] lg:h-[fit-content]">
                            Phone numbers
                        </Label>

                        <Stack className="lg:w-[100%] lg:flex lg:gap-x-[2rem] lg:gap-y-[1rem] lg:items-center">
                            <Stack className="lg:flex lg:flex-row lg:gap-x-[0.1rem] lg:w-[100%] lg:gap-y-[1rem]">
                                <Select
                                    className="lg:flex lg:flex-row lg:items-center lg:w-[40%] lg:p-[5px] lg:font-rubik">
                                    <Container className="lg:w-[auto]">Mobile number</Container>
                                    <Container className="lg:w-[auto]">Home Number</Container>
                                    <Container className="lg:w-[auto]">Telephone</Container>
                                </Select>
                                <Stack
                                    className="lg:flex lg:flex-row lg:gap-x-[5px] lg:items-center lg:justify-between lg:w-[60%]">
                                    <Input
                                        className="lg:text-[#89909aff] lg:flex-grow lg:h-[auto] lg:py-[0.9rem] lg:px-[0.5rem] lg:font-rubik"></Input>
                                    <Stack
                                        className="lg:w-[fit-content] lg:h-[auto] lg:flex lg:gap-[5px] lg:items-center lg:mr-[1rem]">
                                        <Image
                                            src="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KDTwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyBmaWxsPSIjQzhDRkQ5IiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDMzNS43NjUgMzM1Ljc2NSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3Ryb2tlPSIjQzhDRkQ5Ij4KDTxnIGlkPSJTVkdSZXBvX2JnQ2FycmllciIgc3Ryb2tlLXdpZHRoPSIwIi8+Cg08ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KDTxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4gPGc+IDxnPiA8cG9seWdvbiBwb2ludHM9IjMxMS43NTcsNDEuODAzIDEwNy41NzMsMjQ1Ljk2IDIzLjk4NiwxNjIuMzY0IDAsMTg2LjM5MyAxMDcuNTczLDI5My45NjIgMzM1Ljc2NSw2NS43OTUgIi8+IDwvZz4gPC9nPiA8L2c+Cg08L3N2Zz4="
                                            className="lg:w-[20px] lg:h-[15px]"></Image>
                                        <Label
                                            className="lg:text-[#c4c7ccff] lg:font-[500] lg:text-[16px] lg:font-rubik lg:h-[fit-content] lg:w-[fit-content]">
                                            Verified
                                        </Label>
                                    </Stack>
                                </Stack>
                            </Stack>
                            <Switch></Switch>
                        </Stack>
                    </Stack>
                    <Stack className="lg:block lg:h-[auto]">
                        <Button className="lg:bg-[None] lg:h-[fit-content] lg:w-[fit-content] lg:flex lg:p-[5px]">
                            <Image
                                src="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KDTwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KDTxnIGlkPSJTVkdSZXBvX2JnQ2FycmllciIgc3Ryb2tlLXdpZHRoPSIwIi8+Cg08ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KDTxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4gPGcgaWQ9IkVkaXQgLyBBZGRfUGx1cyI+IDxwYXRoIGlkPSJWZWN0b3IiIGQ9Ik02IDEySDEyTTEyIDEySDE4TTEyIDEyVjE4TTEyIDEyVjYiIHN0cm9rZT0iIzg5OTA5QSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4gPC9nPiA8L2c+Cg08L3N2Zz4="
                                className="lg:w-[24px] lg:h-[20px]"></Image>
                            <Typography
                                className="lg:text-[#89909aff] lg:font-[600] lg:text-[16px] lg:font-rubik lg:whitespace-no-wrap">
                                phone number
                            </Typography>
                        </Button>
                    </Stack>
                </Stack>
                <Card className="lg:flex lg:flex-col lg:items-center lg:h-[100%] lg:gap-y-[0.5rem]">
                    <Avatar
                        className="lg:flex lg:justify-center lg:items-center lg:w-[160px] lg:h-[160px] lg:bg-[#B6F0BC]">
                        <Typography className="lg:text-[60px] lg:font-rubik lg:text-[white] lg:leading-[normal]">
                            B
                        </Typography>
                    </Avatar>
                    <Button
                        className="lg:bg-[#89909aff] lg:text-[#ffffffff] lg:font-[600] lg:text-[16px] lg:h-[auto] lg:w-[fit-content] lg:py-[0.2rem] lg:px-[1.4rem] lg:rounded-[3px]">
                        <Typography className="lg:w-[fit-content] lg:h-[fit-content] lg:font-rubik">
                            Update
                        </Typography>
                    </Button>
                </Card>
            </Stack>
        </Stack>
    )
}

export default UserProfile;
