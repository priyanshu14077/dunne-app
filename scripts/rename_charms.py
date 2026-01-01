
import re

FILE_PATH = 'lib/mock-data.ts'

# Mapping slug to nicer Display Name for the generated name
SLUG_MAP = {
    'eternalbloom': 'Eternal Bloom',
    'gameon': 'Game On',
    'guardian': 'Guardian',
    'lovestruck': 'LoveStruck',
    'persona': 'Persona',
    'sugarpop': 'Sugar Pop',
    'wildfree': 'Wild & Free',
    'harrypotter': 'Harry Potter' # just in case
}

def rename_charms():
    with open(FILE_PATH, 'r') as f:
        lines = f.readlines()

    new_lines = []
    pending_name = None
    
    # Regex to find ID line and capture prefix + number: "id": "eternalbloom-1"
    # Note: the file uses double quotes based on the snippet.
    id_pattern = re.compile(r'^\s*"?id"?: ["\']([a-zA-Z0-9]+)-(\d+)["\'],?')
    
    # Regex to key match "name": "..."
    name_pattern = re.compile(r'^(\s*"?name"?: )["\'].*?["\'](,?)$')

    for line in lines:
        # Check for ID match
        id_match = id_pattern.match(line)
        if id_match:
            prefix = id_match.group(1).lower() # strict lower for map lookup
            number = id_match.group(2)
            
            # Look up nice name, fallback to Title Case of prefix
            base_name = SLUG_MAP.get(prefix, prefix.title())
            
            # Format: "Eternal Bloom 1"
            pending_name = f"{base_name} {number}"
            new_lines.append(line)
            continue

        # Check for Name match match ONLY if we have a pending rename from the ID line immediately above (or loose state)
        # In the file structure, name follows ID.
        if pending_name:
            name_match = name_pattern.match(line)
            if name_match:
                # Group 1 is indentation + key, Group 2 is trailing comma
                new_line = f'{name_match.group(1)}"{pending_name}"{name_match.group(2)}\n'
                new_lines.append(new_line)
                pending_name = None # Reset
                continue
            else:
                # If we encounter something else that isn't name, we might lose the lock? 
                # Check file structure: ID is followed by Name. 
                # If there's an empty line or something, we might keep pending_name?
                # For safety, if we hit "price" or "category", reset pending
                if 'price' in line or 'category' in line:
                    pending_name = None
        
        new_lines.append(line)

    with open(FILE_PATH, 'w') as f:
        f.writelines(new_lines)
    
    print(f"Processed {len(lines)} lines. Renaming complete.")

if __name__ == '__main__':
    rename_charms()
