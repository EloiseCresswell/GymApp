def individual_serial(gymgoal) -> dict :
    return {
        "id": str(gymgoal["_id"]),
        "name": gymgoal["name"],
        "description": gymgoal["description"],
        "complete": gymgoal["complete"],
    }

def list_serial(gymgoals) -> list :
    return[individual_serial(gymgoal) for gymgoal in gymgoals]