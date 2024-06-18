from fastapi import APIRouter
from models.gymcollection import GymCollection
from config.database import collection_name 
from schema.schemas import list_serial
from bson import ObjectId

router = APIRouter()

# Get request method
@router.get("/")
async def get_GymCollection():
    gymCollections = list_serial(collection_name.find())
    return gymCollections

# Post request method
@router.post("/")
async def post_GymCollection(gymCollection: GymCollection):
    collection_name.insert_one(dict(gymCollection))

@router.put("/[id]")
async def put_GymCollection(id: str, gymCollection: GymCollection):
    collection_name.find_one_and_update({"_id" : ObjectId(id)}, {"$set": dict(gymCollection)})

@router.delete("/[id]")
async def delete_GymCollection(id: str):
    collection_name.find_one_and_delete({"_id" : ObjectId(id)})