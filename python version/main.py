import os

def deprecationCost():
    while True:
        try:
            machine_cost = int(input("how much did you pay for your 3d printer? $"))
            break
        except:
            print("Try rounding the cost to a whole number and submit that!")
    while True:
        try:
            machine_hours = int(input("How many hours does your machine have (they normally average around 20,000 hours)? "))
            break
        except:
            print("Please submit whole numbers and numbers without commas. (ex: 20000)")
    while True:
        try:
            print_hours = float(input("How many HOURS would/did it take to print? "))
            break
        except:
            print("Please submit the information correctly!")
    while True:
        try:
            print_minutes = float(input("How many MINUTES would/did it take to print? "))
            break
        except:
            print("Please submit the information correctly!")
    print_time = print_hours + print_minutes / 60
    return [round((machine_cost / machine_hours) + print_time, 4), print_time]

def filamentCost():
    while True:
        try:
            price_per_kg = float(input("how much is a kilogram of your roll of filament? $"))
            break
        except:
            print("you need to put a number...!")
    while True:
        try:
            model_weight = float(input("How much would/does the model weigh in grams? "))
            break
        except:
            print("Please submit how much it weighs in grams.")
    return round((price_per_kg / 1000) * model_weight, 4)

def otherCosts(print_time):
    return 5 * print_time

def main():
    print("--- Deprecation Cost ---")
    DC = deprecationCost()
    os.system('clear')
    print("--- Filament Cost ---")
    FC = filamentCost()
    os.system('clear')
    print("--- Hourly cost ---")
    OC = otherCosts(DC[1]) 
    os.system('clear')
    base_price = DC[0] + FC + OC
    profit = base_price * 0.6
    total = base_price + profit
    print(f"Your total for this project is ${round(total, 2)}!")
    print(f"""
Here is how we got the total:
Deprecation cost: ${round(DC[0], 2)}
Filament cost: ${round(FC, 2)}
Other costs: ${round(OC, 2)}
Total before profit: ${round(base_price, 2)}
Profit: ${round(profit, 2)}
Total after profit: ${round(total, 2)}
""")


if __name__ == "__main__":
    main()