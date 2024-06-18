from pymongo import MongoClient

client = MongoClient(f"mongodb+srv://eloise:sQikFOQ8fwehpfmc@gymgoals.ozvib92.mongodb.net/?retryWrites=true&w=majority&appName=GymGoals")

db = client.GymGoals

collection_name = db["GymGoals_collection"]