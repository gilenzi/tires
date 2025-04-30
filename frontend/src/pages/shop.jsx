import { Accordion, AccordionItem, AccordionItemButton, AccordionItemContent } from "../components/accordion/accordion";
import { Tab, TabContent, Tabs } from "../components/tabs/tabs";

export function Shop({children, colProps}){
    return (
        <div>
            SHOP PAGE
            <Accordion defaultItem="price">
                <AccordionItem name="brand">
                    <AccordionItemButton name="brand">Brand</AccordionItemButton>
                    <AccordionItemContent name="brand">Accordion brand desc</AccordionItemContent>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemButton name="price">Price</AccordionItemButton>
                    <AccordionItemContent name="price">Accordion price desc</AccordionItemContent>
                </AccordionItem>
                <AccordionItem name="discount">
                    <AccordionItemButton name="discount">Discount</AccordionItemButton>
                    <AccordionItemContent name="discount">Accordion discount desc</AccordionItemContent>
                </AccordionItem>
            </Accordion>

            {/* <Tabs defaultTab="brand">
                <Tab name="brand">
                    Brand
                </Tab>
                <TabContent name="brand">
                    Brand Description
                </TabContent>
                <Tab name="price">
                    Price
                </Tab>
                <TabContent name="price">
                    price Description
                </TabContent>
                <Tab name="discount">
                    Discount
                </Tab>
                <TabContent name="discount">
                    Discount Description
                </TabContent>
            </Tabs> */}
        </div>
    )
}