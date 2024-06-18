from pydantic import BaseModel

class GymCollection(BaseModel) : 
    name: str
    description : str
    complete : bool 