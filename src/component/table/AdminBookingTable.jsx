import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  IconButton,
  Input,
  Tab,
  Tabs,
  TabsHeader,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { HiMagnifyingGlass, HiPencil, HiUserPlus } from "react-icons/hi2";
import React, { useEffect, useState } from "react";

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Monitored",
    value: "monitored",
  },
  {
    label: "Unmonitored",
    value: "unmonitored",
  },
];

const TABLE_HEAD = [
  "Booking ID",
  "Created At",
  "Updated At",
  "Status",
  "Total Amount",
  "Customer",
  "Organizer",
  "",
];

export default function AdminTable() {
  const [tableRows, setTableRows] = useState([]); // State to store the table rows

  useEffect(() => {
    // Fetch bookings and update the table rows
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/bookings");
      if (!response.ok) {
        throw new Error("Failed to fetch bookings");
      }
      const data = await response.json();
      const bookings = data.data; // Adjust this line based on the actual structure of the response

      // Ensure bookings is an array
      if (!Array.isArray(bookings)) {
        throw new Error("Invalid response data format");
      }

      setTableRows(bookings);
    } catch (error) {
      console.log("Fetch bookings error: ", error);
    }
  };

  return (
    <Card className="h-screen w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Booking list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all bookings``
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button variant="outlined" size="sm">
              view all
            </Button>
            <Button className="flex items-center gap-3" size="sm">
              <HiUserPlus strokeWidth={2} className="h-4 w-4" /> Add member
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="all" className="w-full md:w-max">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input
              label="Search"
              icon={<HiMagnifyingGlass className="h-5 w-5" />}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows.map(
              ({
                id,
                createdAt,
                updatedAt,
                status,
                totalAmount,
                customer,
                organizer,
              }) => {
                return (
                  <tr key={id}>
                    <td className="border-b border-blue-gray-50 p-4">
                      <Typography variant="body" color="blue-gray">
                        {id}
                      </Typography>
                    </td>
                    <td className="border-b border-blue-gray-50 p-4">
                      <Typography variant="body" color="blue-gray">
                        {createdAt}
                      </Typography>
                    </td>
                    <td className="border-b border-blue-gray-50 p-4">
                      <Typography variant="body" color="blue-gray">
                        {updatedAt}
                      </Typography>
                    </td>
                    <td className="border-b border-blue-gray-50 p-4">
                      <Typography variant="body" color="blue-gray">
                        {status}
                      </Typography>
                    </td>
                    <td className="border-b border-blue-gray-50 p-4">
                      <Typography variant="body" color="blue-gray">
                        {totalAmount}
                      </Typography>
                    </td>
                    <td className="border-b border-blue-gray-50 p-4">
                      <Typography variant="body" color="blue-gray">
                        {customer.fullName}
                      </Typography>
                    </td>
                    <td className="border-b border-blue-gray-50 p-4">
                      <Typography variant="body" color="blue-gray">
                        {organizer.name}
                      </Typography>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
